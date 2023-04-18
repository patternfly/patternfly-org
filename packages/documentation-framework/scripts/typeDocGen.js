const TypeDoc = require("typedoc");
const path = require("path");

/** Compiles variable types if a type is generic. */
function getVariableType(typeArguments) {
  if (!typeArguments || typeArguments.length === 0) {
    return "";
  }

  const typeArgs = typeArguments.map((type) => getType(type));

  return (
    typeArgs.reduce((acc, type) => acc + type + ", ", "<").slice(0, -2) + ">"
  );
}

/** compiles key/value pairs of a Type or Interface. */
function getPropertyTypes(properties) {
  const formattedProperties = properties.reduce((acc, property) => {
    const { flags, name, type } = property;
    const formattedName = flags.isOptional ? name + "?" : name;
    return `${acc}${formattedName}: ${getType(type)}; `;
  }, "");

  return `{ ${formattedProperties} }`;
}

/** Compiles the subtypes of a tuple. */
function getTupleTypes(tupleElements) {
  const [firstType, secondType] = tupleElements.map((element) =>
    getType(element)
  );
  return `[${firstType}, ${secondType}]`;
}

/** Compiles the different subtypes of a union or intersection. */
function getJoinedTypes(types, joinChar) {
  const joinedTypes = types.map((type) => getType(type));
  return joinedTypes
    .reduce((acc, type) => `${acc} ${joinChar} ${type}`, "")
    .slice(2);
}

/** Return the type of a reflection.
 * For anything that has, or can have, multiple subtypes (i.e. variable types in a generic, properties in an interface,
 * several types in a union, callbacks, etc.) it will recursively navigate the parsed type info as needed to resolve
 * all relevant subtypes.
 */
function getType(reflection) {
  switch (reflection.type) {
    case "intrinsic":
    case "reference":
      return reflection.name + getVariableType(reflection.typeArguments);
    case "union":
      return getJoinedTypes(reflection.types, "|");
    case "reflection":
      const { signatures, children } = reflection.declaration;
      if (signatures) {
        return getFunctionDocumentation(signatures[0]).type;
      } else if (children) {
        return getPropertyTypes(children);
      } else {
        return "Props";
      }
    case "array":
      return reflection.elementType.name + "[]";
    case "tuple":
      return getTupleTypes(reflection.elements);
    case "intersection":
      return getJoinedTypes(reflection.types, "&");
    case "literal":
      return reflection.value;
  }
}

/** Compiles information about the parameters of a function.
 * Includes the name, default value, type, and whether it is optional.
 */
function getParamInfo(parameters = []) {
  return parameters.map((parameter) => {
    const { name, defaultValue, type, flags } = parameter;
    return {
      name,
      default: defaultValue,
      type: getType(type),
      optional: flags.isOptional,
    };
  });
}

/** Formats call signature for a function. */
function formatFunctionType(parameters, returnType) {
  const annotatedParams = parameters.map((parameter) => {
    const { name, type, optional } = parameter;

    return [optional ? name + "?" : name, type];
  });

  const formattedParams = annotatedParams
    .reduce((acc, param) => `${acc}, ${param[0]}: ${param[1]}`, "")
    .slice(2);

  return `(${formattedParams}) => ${returnType}`;
}

/** Primary entry point for gathering type information from a typedoc function reflection. */
function getFunctionDocumentation(callSignatureReflection) {
  const { type, parameters, comment } = callSignatureReflection;
  const params = getParamInfo(parameters);

  const returnType = type?.name || getType(type);

  return {
    params,
    returnType,
    type: formatFunctionType(params, returnType),
    description: comment?.shortText,
  };
}

/** Parses the source for a package using TypeDoc. */
function typeDocGen(entryPoint, tsconfigLocation) {
  const app = new TypeDoc.Application();
  app.options.addReader(new TypeDoc.TSConfigReader());
  app.bootstrap({
    // typedoc options here
    entryPointStrategy: "expand",
    entryPoints: [entryPoint],
    tsconfig: tsconfigLocation,
  });

  // this non-standard reflection creation allows us to ignore any type errors in a package
  const project = app.converter.convert(app.getEntryPoints() ?? []);

  // if something caused project conversion to fail log an error
  if (project) {
    return project;
  } else {
    console.error("Something went wrong during typedoc project conversion");
    return {};
  }
}

/** Takes package information and returns an object with all tsdoc standard format info about the functions in it.
 * 
 * The object has file names as keys, with values being an additional object which has the function names in that file
 * as keys and the information about that function as the value, also in object form.
 * Information includes the name of the file in which it's defined, the parameters, description, default values and
 * type information.
 *
 * Example structure:
 * {
 *   "components/component.tsx": {
 *     "boolToString": {
 *       "description": "Converts a boolean to a string",
 *       "params": [
 *         {
 *           "default": false,
 *           "name": "booleanValue",
 *           "optional": true,
 *           "type": "boolean",
 *         },
 *       ],
 *       "returnType": "string",
 *       "type": "(booleanValue?: boolean) => string",
 *     },
 *   },
 * }
 */
function getPackageFunctionDocumentation(
  packageName,
  pathToRoot = "dist/js/index.js",
  srcPath = "src",
  tsconfigPath = "tsconfig.json"
) {
  const packageRoot = require.resolve(packageName).replace(pathToRoot, "");
  const entry = path.relative(process.cwd(), path.join(packageRoot, srcPath));
  const configLocation = path.relative(
    process.cwd(),
    path.join(packageRoot, tsconfigPath)
  );

  const packageReflection = typeDocGen(entry, configLocation);

  // 64 corresponds with functions, see all reflection kinds here: https://typedoc.org/api/enums/Models.ReflectionKind-1.html
  const functionReflections = packageReflection.getReflectionsByKind(64);

  const functionsMap = functionReflections.reduce((acc, functionReflection) => {
    const { name, sources, signatures } = functionReflection;

    const sourceFile = sources[0].fileName;
    const shortSourceFile = sourceFile.replace(
      `${packageName}/${srcPath}/`,
      ""
    );
    const obj = getFunctionDocumentation(signatures[0]);

    if (acc[shortSourceFile]) {
      acc[shortSourceFile] = { ...acc[shortSourceFile], [name]: obj };
    } else {
      acc[shortSourceFile] = { [name]: obj };
    }
    return acc;
  }, {});

  return functionsMap;
}

module.exports = { getPackageFunctionDocumentation };
