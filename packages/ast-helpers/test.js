const { parse, tokenize } = require('./acorn.js');
const { convertToReactComponent } = require('./stringify')

const testString = `export const AboutModalBasic: React.FunctionComponent<React.PropsWithChildren<unknown>> = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
  
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
  
    return (
      <React.Fragment>
       <div></div>
      </React.Fragment>
    );
  };`


const out = parse(testString);
console.log(convertToReactComponent(testString).code);
console.log(out);