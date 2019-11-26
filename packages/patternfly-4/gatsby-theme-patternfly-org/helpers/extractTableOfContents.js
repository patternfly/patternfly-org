const visit = require('unist-util-visit');

module.exports = {
  extractTableOfContents: mdxAST => {
    const toc = [];
    
    if (!mdxAST) {
      return toc;
    }

    visit(mdxAST, 'heading', node => {
      if (node.depth === 2 && node.children.length > 0) { // ## h2 headings
        toc.push(node.children[0].value);
      }
    });

    return toc;
  }
}

// console.log(
// module.exports.extractTableOfContents({
//   "type": "root",
//   "children": [
//     {
//       "type": "code",
//       "lang": "hbs",
//       "meta": "title=Alert-group",
//       "value": "{{#> alert-group}}\n  {{#> alert-item}}  \n    {{#> alert alert--modifier=\"pf-m-success\" alert--attribute='aria-label=\"Success alert\"'}}\n      {{#> alert-icon alert-icon--type=\"check-circle\"}}\n      {{/alert-icon}}\n        {{#> alert-title}}\n          {{#> screen-reader}}Success alert:{{/screen-reader}}\n          Success alert title\n        {{/alert-title}}\n    {{/alert}}\n  {{/alert-item}}\n\n  {{#> alert-item}}\n    {{#> alert alert--modifier=\"pf-m-danger\" alert--attribute='aria-label=\"Danger alert\"'}}\n      {{#> alert-icon alert-icon--type=\"exclamation-circle\"}}\n      {{/alert-icon}}\n        {{#> alert-title}}\n          {{#> screen-reader}}Danger alert:{{/screen-reader}}\n          Danger alert title\n        {{/alert-title}}\n      {{#> alert-action}}\n        {{#> button button--modifier=\"pf-m-link\"}}\n          Action button\n        {{/button}}\n      {{/alert-action}}\n    {{/alert}}\n  {{/alert-item}}\n\n  {{#> alert-item}}\n    {{#> alert alert--modifier=\"pf-m-info\" alert--attribute='aria-label=\"Information alert\"'}}\n      {{#> alert-icon alert-icon--type=\"info-circle\"}}\n      {{/alert-icon}}\n        {{#> alert-title}}\n          {{#> screen-reader}}Info alert:{{/screen-reader}}\n          Info alert title\n        {{/alert-title}}\n        {{#> alert-description}}\n          Info alert description. <a href=\"#\">This is a link.</a>\n        {{/alert-description}}\n    {{/alert}}\n  {{/alert-item}}\n{{/alert-group}}",
//       "position": {
//         "start": {
//           "line": 2,
//           "column": 1,
//           "offset": 1
//         },
//         "end": {
//           "line": 45,
//           "column": 4,
//           "offset": 1450
//         },
//         "indent": [
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1
//         ]
//       }
//     },
//     {
//       "type": "code",
//       "lang": "hbs",
//       "meta": "title=Toast-alert-group isFullscreen=true",
//       "value": "{{#> alert-group alert-group--modifier=\"pf-m-toast\"}}\n  {{#> alert-item}}  \n    {{#> alert alert--modifier=\"pf-m-success\" alert--attribute='aria-label=\"Success toast alert\"'}}\n      {{#> alert-icon alert-icon--type=\"check-circle\"}}\n      {{/alert-icon}}\n        {{#> alert-title alert-title--attribute='id=\"alert_one_title\"'}}\n          {{#> screen-reader}}Success alert:{{/screen-reader}}\n          Success toast alert title\n        {{/alert-title}}\n        {{#> alert-action}}\n          {{#> button button--modifier=\"pf-m-plain\" button--attribute='aria-label=\"Close success alert: Success alert title\"'}}\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          {{/button}}\n        {{/alert-action}}\n    {{/alert}}\n  {{/alert-item}}\n\n  {{#> alert-item}}\n    {{#> alert alert--modifier=\"pf-m-danger\" alert--attribute='aria-label=\"Danger toast alert\"'}}\n      {{#> alert-icon alert-icon--type=\"exclamation-circle\"}}\n      {{/alert-icon}}\n        {{#> alert-title alert-title--attribute='id=\"alert_two_title\"'}}\n          {{#> screen-reader}}Danger alert:{{/screen-reader}}\n          Danger toast alert title\n        {{/alert-title}}\n        {{#> alert-action}}\n          {{#> button button--modifier=\"pf-m-plain\" button--attribute='aria-label=\"Close success alert: Success alert title\"'}}\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          {{/button}}\n        {{/alert-action}}\n    {{/alert}}\n  {{/alert-item}}\n\n  {{#> alert-item}}\n    {{#> alert alert--modifier=\"pf-m-info\" alert--attribute='aria-label=\"Information toast alert\"'}}\n      {{#> alert-icon alert-icon--type=\"info-circle\"}}\n      {{/alert-icon}}\n        {{#> alert-title alert-title--attribute='id=\"alert_three_title\"'}}\n          {{#> screen-reader}}Info alert:{{/screen-reader}}\n          Info toast alert title\n        {{/alert-title}}\n        {{#> alert-description}}\n          Info toast alert description. <a href=\"#\">This is a link.</a>\n        {{/alert-description}}\n        {{#> alert-action}}\n          {{#> button button--modifier=\"pf-m-plain\" button--attribute='aria-label=\"Close success alert: Success alert title\"'}}\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          {{/button}}\n        {{/alert-action}}\n    {{/alert}}\n  {{/alert-item}}\n{{/alert-group}}",
//       "position": {
//         "start": {
//           "line": 47,
//           "column": 1,
//           "offset": 1452
//         },
//         "end": {
//           "line": 100,
//           "column": 4,
//           "offset": 3789
//         },
//         "indent": [
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1,
//           1
//         ]
//       }
//     },
//     {
//       "type": "heading",
//       "depth": 1,
//       "children": [
//         {
//           "type": "text",
//           "value": "Documentation",
//           "position": {
//             "start": {
//               "line": 102,
//               "column": 3,
//               "offset": 3793
//             },
//             "end": {
//               "line": 102,
//               "column": 16,
//               "offset": 3806
//             },
//             "indent": []
//           }
//         }
//       ],
//       "position": {
//         "start": {
//           "line": 102,
//           "column": 1,
//           "offset": 3791
//         },
//         "end": {
//           "line": 102,
//           "column": 16,
//           "offset": 3806
//         },
//         "indent": []
//       }
//     },
//     {
//       "type": "heading",
//       "depth": 2,
//       "children": [
//         {
//           "type": "text",
//           "value": "Overview",
//           "position": {
//             "start": {
//               "line": 103,
//               "column": 4,
//               "offset": 3810
//             },
//             "end": {
//               "line": 103,
//               "column": 12,
//               "offset": 3818
//             },
//             "indent": []
//           }
//         }
//       ],
//       "position": {
//         "start": {
//           "line": 103,
//           "column": 1,
//           "offset": 3807
//         },
//         "end": {
//           "line": 103,
//           "column": 12,
//           "offset": 3818
//         },
//         "indent": []
//       }
//     },
//     {
//       "type": "paragraph",
//       "children": [
//         {
//           "type": "text",
//           "value": "Alert groups are used to contain and align consecutive alerts. Groups can either be embedded alongside a page's content or in the top-right corner as a toast group using the ",
//           "position": {
//             "start": {
//               "line": 105,
//               "column": 1,
//               "offset": 3820
//             },
//             "end": {
//               "line": 105,
//               "column": 175,
//               "offset": 3994
//             },
//             "indent": []
//           }
//         },
//         {
//           "type": "inlineCode",
//           "value": ".pf-m-toast",
//           "position": {
//             "start": {
//               "line": 105,
//               "column": 175,
//               "offset": 3994
//             },
//             "end": {
//               "line": 105,
//               "column": 188,
//               "offset": 4007
//             },
//             "indent": []
//           }
//         },
//         {
//           "type": "text",
//           "value": " modifier.",
//           "position": {
//             "start": {
//               "line": 105,
//               "column": 188,
//               "offset": 4007
//             },
//             "end": {
//               "line": 105,
//               "column": 198,
//               "offset": 4017
//             },
//             "indent": []
//           }
//         }
//       ],
//       "position": {
//         "start": {
//           "line": 105,
//           "column": 1,
//           "offset": 3820
//         },
//         "end": {
//           "line": 105,
//           "column": 198,
//           "offset": 4017
//         },
//         "indent": []
//       }
//     },
//     {
//       "type": "heading",
//       "depth": 1,
//       "children": [
//         {
//           "type": "text",
//           "value": "Design",
//           "position": {
//             "start": {
//               "line": 108,
//               "column": 3,
//               "offset": 4022
//             },
//             "end": {
//               "line": 108,
//               "column": 9,
//               "offset": 4028
//             },
//             "indent": []
//           }
//         }
//       ],
//       "position": {
//         "start": {
//           "line": 108,
//           "column": 1,
//           "offset": 4020
//         },
//         "end": {
//           "line": 108,
//           "column": 9,
//           "offset": 4028
//         },
//         "indent": []
//       }
//     },
//     {
//       "type": "paragraph",
//       "children": [
//         {
//           "type": "text",
//           "value": "Alert Groups contain and align consecutive alerts.",
//           "position": {
//             "start": {
//               "line": 110,
//               "column": 1,
//               "offset": 4030
//             },
//             "end": {
//               "line": 110,
//               "column": 51,
//               "offset": 4080
//             },
//             "indent": []
//           }
//         }
//       ],
//       "position": {
//         "start": {
//           "line": 110,
//           "column": 1,
//           "offset": 4030
//         },
//         "end": {
//           "line": 110,
//           "column": 51,
//           "offset": 4080
//         },
//         "indent": []
//       }
//     },
//     {
//       "type": "heading",
//       "depth": 2,
//       "children": [
//         {
//           "type": "text",
//           "value": "Usage",
//           "position": {
//             "start": {
//               "line": 112,
//               "column": 4,
//               "offset": 4085
//             },
//             "end": {
//               "line": 112,
//               "column": 9,
//               "offset": 4090
//             },
//             "indent": []
//           }
//         }
//       ],
//       "position": {
//         "start": {
//           "line": 112,
//           "column": 1,
//           "offset": 4082
//         },
//         "end": {
//           "line": 112,
//           "column": 9,
//           "offset": 4090
//         },
//         "indent": []
//       }
//     },
//     {
//       "type": "paragraph",
//       "children": [
//         {
//           "type": "text",
//           "value": "Alert Groups should be used wherever and whenever multiple alerts are displayed, either inline with a page's content or in the top-right corner as a group of toast alerts.",
//           "position": {
//             "start": {
//               "line": 114,
//               "column": 1,
//               "offset": 4092
//             },
//             "end": {
//               "line": 114,
//               "column": 172,
//               "offset": 4263
//             },
//             "indent": []
//           }
//         }
//       ],
//       "position": {
//         "start": {
//           "line": 114,
//           "column": 1,
//           "offset": 4092
//         },
//         "end": {
//           "line": 114,
//           "column": 172,
//           "offset": 4263
//         },
//         "indent": []
//       }
//     },
//     {
//       "type": "heading",
//       "depth": 2,
//       "children": [
//         {
//           "type": "text",
//           "value": "Overview",
//           "position": {
//             "start": {
//               "line": 116,
//               "column": 4,
//               "offset": 4268
//             },
//             "end": {
//               "line": 116,
//               "column": 12,
//               "offset": 4276
//             },
//             "indent": []
//           }
//         }
//       ],
//       "position": {
//         "start": {
//           "line": 116,
//           "column": 1,
//           "offset": 4265
//         },
//         "end": {
//           "line": 116,
//           "column": 12,
//           "offset": 4276
//         },
//         "indent": []
//       }
//     },
//     {
//       "type": "paragraph",
//       "children": [
//         {
//           "type": "inlineCode",
//           "value": ".pf-c-alert-group",
//           "position": {
//             "start": {
//               "line": 118,
//               "column": 1,
//               "offset": 4278
//             },
//             "end": {
//               "line": 118,
//               "column": 20,
//               "offset": 4297
//             },
//             "indent": []
//           }
//         },
//         {
//           "type": "text",
//           "value": " is optional when only one alert is needed. It becomes required when more than one alert is used in a list.",
//           "position": {
//             "start": {
//               "line": 118,
//               "column": 20,
//               "offset": 4297
//             },
//             "end": {
//               "line": 118,
//               "column": 127,
//               "offset": 4404
//             },
//             "indent": []
//           }
//         }
//       ],
//       "position": {
//         "start": {
//           "line": 118,
//           "column": 1,
//           "offset": 4278
//         },
//         "end": {
//           "line": 118,
//           "column": 127,
//           "offset": 4404
//         },
//         "indent": []
//       }
//     },
//     {
//       "type": "heading",
//       "depth": 3,
//       "children": [
//         {
//           "type": "text",
//           "value": "Usage",
//           "position": {
//             "start": {
//               "line": 120,
//               "column": 5,
//               "offset": 4410
//             },
//             "end": {
//               "line": 120,
//               "column": 10,
//               "offset": 4415
//             },
//             "indent": []
//           }
//         }
//       ],
//       "position": {
//         "start": {
//           "line": 120,
//           "column": 1,
//           "offset": 4406
//         },
//         "end": {
//           "line": 120,
//           "column": 10,
//           "offset": 4415
//         },
//         "indent": []
//       }
//     },
//     {
//       "type": "table",
//       "align": [
//         null,
//         null,
//         null
//       ],
//       "children": [
//         {
//           "type": "tableRow",
//           "children": [
//             {
//               "type": "tableCell",
//               "children": [
//                 {
//                   "type": "text",
//                   "value": "Attribute",
//                   "position": {
//                     "start": {
//                       "line": 122,
//                       "column": 3,
//                       "offset": 4419
//                     },
//                     "end": {
//                       "line": 122,
//                       "column": 12,
//                       "offset": 4428
//                     },
//                     "indent": []
//                   }
//                 }
//               ],
//               "position": {
//                 "start": {
//                   "line": 122,
//                   "column": 3,
//                   "offset": 4419
//                 },
//                 "end": {
//                   "line": 122,
//                   "column": 12,
//                   "offset": 4428
//                 },
//                 "indent": []
//               }
//             },
//             {
//               "type": "tableCell",
//               "children": [
//                 {
//                   "type": "text",
//                   "value": "Applied to",
//                   "position": {
//                     "start": {
//                       "line": 122,
//                       "column": 15,
//                       "offset": 4431
//                     },
//                     "end": {
//                       "line": 122,
//                       "column": 25,
//                       "offset": 4441
//                     },
//                     "indent": []
//                   }
//                 }
//               ],
//               "position": {
//                 "start": {
//                   "line": 122,
//                   "column": 15,
//                   "offset": 4431
//                 },
//                 "end": {
//                   "line": 122,
//                   "column": 25,
//                   "offset": 4441
//                 },
//                 "indent": []
//               }
//             },
//             {
//               "type": "tableCell",
//               "children": [
//                 {
//                   "type": "text",
//                   "value": "Outcome",
//                   "position": {
//                     "start": {
//                       "line": 122,
//                       "column": 28,
//                       "offset": 4444
//                     },
//                     "end": {
//                       "line": 122,
//                       "column": 35,
//                       "offset": 4451
//                     },
//                     "indent": []
//                   }
//                 }
//               ],
//               "position": {
//                 "start": {
//                   "line": 122,
//                   "column": 28,
//                   "offset": 4444
//                 },
//                 "end": {
//                   "line": 122,
//                   "column": 35,
//                   "offset": 4451
//                 },
//                 "indent": []
//               }
//             }
//           ],
//           "position": {
//             "start": {
//               "line": 122,
//               "column": 1,
//               "offset": 4417
//             },
//             "end": {
//               "line": 122,
//               "column": 37,
//               "offset": 4453
//             },
//             "indent": []
//           }
//         },
//         {
//           "type": "tableRow",
//           "children": [
//             {
//               "type": "tableCell",
//               "children": [
//                 {
//                   "type": "inlineCode",
//                   "value": ".pf-c-alert-group",
//                   "position": {
//                     "start": {
//                       "line": 124,
//                       "column": 3,
//                       "offset": 4473
//                     },
//                     "end": {
//                       "line": 124,
//                       "column": 22,
//                       "offset": 4492
//                     },
//                     "indent": []
//                   }
//                 }
//               ],
//               "position": {
//                 "start": {
//                   "line": 124,
//                   "column": 3,
//                   "offset": 4473
//                 },
//                 "end": {
//                   "line": 124,
//                   "column": 22,
//                   "offset": 4492
//                 },
//                 "indent": []
//               }
//             },
//             {
//               "type": "tableCell",
//               "children": [
//                 {
//                   "type": "inlineCode",
//                   "value": "<ul>",
//                   "position": {
//                     "start": {
//                       "line": 124,
//                       "column": 25,
//                       "offset": 4495
//                     },
//                     "end": {
//                       "line": 124,
//                       "column": 31,
//                       "offset": 4501
//                     },
//                     "indent": []
//                   }
//                 }
//               ],
//               "position": {
//                 "start": {
//                   "line": 124,
//                   "column": 25,
//                   "offset": 4495
//                 },
//                 "end": {
//                   "line": 124,
//                   "column": 31,
//                   "offset": 4501
//                 },
//                 "indent": []
//               }
//             },
//             {
//               "type": "tableCell",
//               "children": [
//                 {
//                   "type": "text",
//                   "value": "Creates an alert group component. ",
//                   "position": {
//                     "start": {
//                       "line": 124,
//                       "column": 34,
//                       "offset": 4504
//                     },
//                     "end": {
//                       "line": 124,
//                       "column": 68,
//                       "offset": 4538
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "strong",
//                   "children": [
//                     {
//                       "type": "text",
//                       "value": "Required",
//                       "position": {
//                         "start": {
//                           "line": 124,
//                           "column": 70,
//                           "offset": 4540
//                         },
//                         "end": {
//                           "line": 124,
//                           "column": 78,
//                           "offset": 4548
//                         },
//                         "indent": []
//                       }
//                     }
//                   ],
//                   "position": {
//                     "start": {
//                       "line": 124,
//                       "column": 68,
//                       "offset": 4538
//                     },
//                     "end": {
//                       "line": 124,
//                       "column": 80,
//                       "offset": 4550
//                     },
//                     "indent": []
//                   }
//                 }
//               ],
//               "position": {
//                 "start": {
//                   "line": 124,
//                   "column": 34,
//                   "offset": 4504
//                 },
//                 "end": {
//                   "line": 124,
//                   "column": 80,
//                   "offset": 4550
//                 },
//                 "indent": []
//               }
//             }
//           ],
//           "position": {
//             "start": {
//               "line": 124,
//               "column": 1,
//               "offset": 4471
//             },
//             "end": {
//               "line": 124,
//               "column": 82,
//               "offset": 4552
//             },
//             "indent": []
//           }
//         },
//         {
//           "type": "tableRow",
//           "children": [
//             {
//               "type": "tableCell",
//               "children": [
//                 {
//                   "type": "inlineCode",
//                   "value": ".pf-c-alert-group__item",
//                   "position": {
//                     "start": {
//                       "line": 125,
//                       "column": 3,
//                       "offset": 4555
//                     },
//                     "end": {
//                       "line": 125,
//                       "column": 28,
//                       "offset": 4580
//                     },
//                     "indent": []
//                   }
//                 }
//               ],
//               "position": {
//                 "start": {
//                   "line": 125,
//                   "column": 3,
//                   "offset": 4555
//                 },
//                 "end": {
//                   "line": 125,
//                   "column": 28,
//                   "offset": 4580
//                 },
//                 "indent": []
//               }
//             },
//             {
//               "type": "tableCell",
//               "children": [
//                 {
//                   "type": "inlineCode",
//                   "value": "<li>",
//                   "position": {
//                     "start": {
//                       "line": 125,
//                       "column": 31,
//                       "offset": 4583
//                     },
//                     "end": {
//                       "line": 125,
//                       "column": 37,
//                       "offset": 4589
//                     },
//                     "indent": []
//                   }
//                 }
//               ],
//               "position": {
//                 "start": {
//                   "line": 125,
//                   "column": 31,
//                   "offset": 4583
//                 },
//                 "end": {
//                   "line": 125,
//                   "column": 37,
//                   "offset": 4589
//                 },
//                 "indent": []
//               }
//             },
//             {
//               "type": "tableCell",
//               "children": [
//                 {
//                   "type": "text",
//                   "value": "Creates an alert group item. ",
//                   "position": {
//                     "start": {
//                       "line": 125,
//                       "column": 40,
//                       "offset": 4592
//                     },
//                     "end": {
//                       "line": 125,
//                       "column": 69,
//                       "offset": 4621
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "strong",
//                   "children": [
//                     {
//                       "type": "text",
//                       "value": "Required",
//                       "position": {
//                         "start": {
//                           "line": 125,
//                           "column": 71,
//                           "offset": 4623
//                         },
//                         "end": {
//                           "line": 125,
//                           "column": 79,
//                           "offset": 4631
//                         },
//                         "indent": []
//                       }
//                     }
//                   ],
//                   "position": {
//                     "start": {
//                       "line": 125,
//                       "column": 69,
//                       "offset": 4621
//                     },
//                     "end": {
//                       "line": 125,
//                       "column": 81,
//                       "offset": 4633
//                     },
//                     "indent": []
//                   }
//                 }
//               ],
//               "position": {
//                 "start": {
//                   "line": 125,
//                   "column": 40,
//                   "offset": 4592
//                 },
//                 "end": {
//                   "line": 125,
//                   "column": 81,
//                   "offset": 4633
//                 },
//                 "indent": []
//               }
//             }
//           ],
//           "position": {
//             "start": {
//               "line": 125,
//               "column": 1,
//               "offset": 4553
//             },
//             "end": {
//               "line": 125,
//               "column": 83,
//               "offset": 4635
//             },
//             "indent": []
//           }
//         }
//       ],
//       "position": {
//         "start": {
//           "line": 122,
//           "column": 1,
//           "offset": 4417
//         },
//         "end": {
//           "line": 125,
//           "column": 83,
//           "offset": 4635
//         },
//         "indent": [
//           1,
//           1,
//           1
//         ]
//       }
//     },
//     {
//       "type": "heading",
//       "depth": 2,
//       "children": [
//         {
//           "type": "text",
//           "value": "Overview",
//           "position": {
//             "start": {
//               "line": 128,
//               "column": 4,
//               "offset": 4641
//             },
//             "end": {
//               "line": 128,
//               "column": 12,
//               "offset": 4649
//             },
//             "indent": []
//           }
//         }
//       ],
//       "position": {
//         "start": {
//           "line": 128,
//           "column": 1,
//           "offset": 4638
//         },
//         "end": {
//           "line": 128,
//           "column": 12,
//           "offset": 4649
//         },
//         "indent": []
//       }
//     },
//     {
//       "type": "paragraph",
//       "children": [
//         {
//           "type": "text",
//           "value": "An alert group that includes the ",
//           "position": {
//             "start": {
//               "line": 130,
//               "column": 1,
//               "offset": 4651
//             },
//             "end": {
//               "line": 130,
//               "column": 34,
//               "offset": 4684
//             },
//             "indent": []
//           }
//         },
//         {
//           "type": "inlineCode",
//           "value": ".pf-m-toast",
//           "position": {
//             "start": {
//               "line": 130,
//               "column": 34,
//               "offset": 4684
//             },
//             "end": {
//               "line": 130,
//               "column": 47,
//               "offset": 4697
//             },
//             "indent": []
//           }
//         },
//         {
//           "type": "text",
//           "value": " modifier becomes a toast alert group with unique positioning in the top-right corner of the window. ",
//           "position": {
//             "start": {
//               "line": 130,
//               "column": 47,
//               "offset": 4697
//             },
//             "end": {
//               "line": 130,
//               "column": 148,
//               "offset": 4798
//             },
//             "indent": []
//           }
//         },
//         {
//           "type": "inlineCode",
//           "value": ".pf-c-alert-group",
//           "position": {
//             "start": {
//               "line": 130,
//               "column": 148,
//               "offset": 4798
//             },
//             "end": {
//               "line": 130,
//               "column": 167,
//               "offset": 4817
//             },
//             "indent": []
//           }
//         },
//         {
//           "type": "text",
//           "value": " is required to create a toast alert group.",
//           "position": {
//             "start": {
//               "line": 130,
//               "column": 167,
//               "offset": 4817
//             },
//             "end": {
//               "line": 130,
//               "column": 210,
//               "offset": 4860
//             },
//             "indent": []
//           }
//         }
//       ],
//       "position": {
//         "start": {
//           "line": 130,
//           "column": 1,
//           "offset": 4651
//         },
//         "end": {
//           "line": 130,
//           "column": 210,
//           "offset": 4860
//         },
//         "indent": []
//       }
//     },
//     {
//       "type": "paragraph",
//       "children": [
//         {
//           "type": "text",
//           "value": "Every toast alert must include a close button to dismiss the alert.",
//           "position": {
//             "start": {
//               "line": 132,
//               "column": 1,
//               "offset": 4862
//             },
//             "end": {
//               "line": 132,
//               "column": 68,
//               "offset": 4929
//             },
//             "indent": []
//           }
//         }
//       ],
//       "position": {
//         "start": {
//           "line": 132,
//           "column": 1,
//           "offset": 4862
//         },
//         "end": {
//           "line": 132,
//           "column": 68,
//           "offset": 4929
//         },
//         "indent": []
//       }
//     },
//     {
//       "type": "heading",
//       "depth": 3,
//       "children": [
//         {
//           "type": "text",
//           "value": "Modifiers",
//           "position": {
//             "start": {
//               "line": 134,
//               "column": 5,
//               "offset": 4935
//             },
//             "end": {
//               "line": 134,
//               "column": 14,
//               "offset": 4944
//             },
//             "indent": []
//           }
//         }
//       ],
//       "position": {
//         "start": {
//           "line": 134,
//           "column": 1,
//           "offset": 4931
//         },
//         "end": {
//           "line": 134,
//           "column": 14,
//           "offset": 4944
//         },
//         "indent": []
//       }
//     },
//     {
//       "type": "table",
//       "align": [
//         null,
//         null,
//         null
//       ],
//       "children": [
//         {
//           "type": "tableRow",
//           "children": [
//             {
//               "type": "tableCell",
//               "children": [
//                 {
//                   "type": "text",
//                   "value": "Class",
//                   "position": {
//                     "start": {
//                       "line": 136,
//                       "column": 3,
//                       "offset": 4948
//                     },
//                     "end": {
//                       "line": 136,
//                       "column": 8,
//                       "offset": 4953
//                     },
//                     "indent": []
//                   }
//                 }
//               ],
//               "position": {
//                 "start": {
//                   "line": 136,
//                   "column": 3,
//                   "offset": 4948
//                 },
//                 "end": {
//                   "line": 136,
//                   "column": 8,
//                   "offset": 4953
//                 },
//                 "indent": []
//               }
//             },
//             {
//               "type": "tableCell",
//               "children": [
//                 {
//                   "type": "text",
//                   "value": "Applied to",
//                   "position": {
//                     "start": {
//                       "line": 136,
//                       "column": 11,
//                       "offset": 4956
//                     },
//                     "end": {
//                       "line": 136,
//                       "column": 21,
//                       "offset": 4966
//                     },
//                     "indent": []
//                   }
//                 }
//               ],
//               "position": {
//                 "start": {
//                   "line": 136,
//                   "column": 11,
//                   "offset": 4956
//                 },
//                 "end": {
//                   "line": 136,
//                   "column": 21,
//                   "offset": 4966
//                 },
//                 "indent": []
//               }
//             },
//             {
//               "type": "tableCell",
//               "children": [
//                 {
//                   "type": "text",
//                   "value": "Outcome",
//                   "position": {
//                     "start": {
//                       "line": 136,
//                       "column": 24,
//                       "offset": 4969
//                     },
//                     "end": {
//                       "line": 136,
//                       "column": 31,
//                       "offset": 4976
//                     },
//                     "indent": []
//                   }
//                 }
//               ],
//               "position": {
//                 "start": {
//                   "line": 136,
//                   "column": 24,
//                   "offset": 4969
//                 },
//                 "end": {
//                   "line": 136,
//                   "column": 31,
//                   "offset": 4976
//                 },
//                 "indent": []
//               }
//             }
//           ],
//           "position": {
//             "start": {
//               "line": 136,
//               "column": 1,
//               "offset": 4946
//             },
//             "end": {
//               "line": 136,
//               "column": 33,
//               "offset": 4978
//             },
//             "indent": []
//           }
//         },
//         {
//           "type": "tableRow",
//           "children": [
//             {
//               "type": "tableCell",
//               "children": [
//                 {
//                   "type": "inlineCode",
//                   "value": ".pf-m-toast",
//                   "position": {
//                     "start": {
//                       "line": 138,
//                       "column": 3,
//                       "offset": 4998
//                     },
//                     "end": {
//                       "line": 138,
//                       "column": 16,
//                       "offset": 5011
//                     },
//                     "indent": []
//                   }
//                 }
//               ],
//               "position": {
//                 "start": {
//                   "line": 138,
//                   "column": 3,
//                   "offset": 4998
//                 },
//                 "end": {
//                   "line": 138,
//                   "column": 16,
//                   "offset": 5011
//                 },
//                 "indent": []
//               }
//             },
//             {
//               "type": "tableCell",
//               "children": [
//                 {
//                   "type": "inlineCode",
//                   "value": ".pf-c-alert-group",
//                   "position": {
//                     "start": {
//                       "line": 138,
//                       "column": 18,
//                       "offset": 5013
//                     },
//                     "end": {
//                       "line": 138,
//                       "column": 37,
//                       "offset": 5032
//                     },
//                     "indent": []
//                   }
//                 }
//               ],
//               "position": {
//                 "start": {
//                   "line": 138,
//                   "column": 18,
//                   "offset": 5013
//                 },
//                 "end": {
//                   "line": 138,
//                   "column": 37,
//                   "offset": 5032
//                 },
//                 "indent": []
//               }
//             },
//             {
//               "type": "tableCell",
//               "children": [
//                 {
//                   "type": "text",
//                   "value": "Applies toast alert styling to an alert group.",
//                   "position": {
//                     "start": {
//                       "line": 138,
//                       "column": 40,
//                       "offset": 5035
//                     },
//                     "end": {
//                       "line": 138,
//                       "column": 86,
//                       "offset": 5081
//                     },
//                     "indent": []
//                   }
//                 }
//               ],
//               "position": {
//                 "start": {
//                   "line": 138,
//                   "column": 40,
//                   "offset": 5035
//                 },
//                 "end": {
//                   "line": 138,
//                   "column": 86,
//                   "offset": 5081
//                 },
//                 "indent": []
//               }
//             }
//           ],
//           "position": {
//             "start": {
//               "line": 138,
//               "column": 1,
//               "offset": 4996
//             },
//             "end": {
//               "line": 138,
//               "column": 88,
//               "offset": 5083
//             },
//             "indent": []
//           }
//         }
//       ],
//       "position": {
//         "start": {
//           "line": 136,
//           "column": 1,
//           "offset": 4946
//         },
//         "end": {
//           "line": 138,
//           "column": 88,
//           "offset": 5083
//         },
//         "indent": [
//           1,
//           1
//         ]
//       }
//     },
//     {
//       "type": "export",
//       "value": "export const _frontmatter = {\"title\":\"Alert Group\",\"section\":\"components\",\"cssPrefix\":\"pf-c-alert-group\"}",
//       "position": {
//         "start": {
//           "line": 141,
//           "column": 1,
//           "offset": 5086
//         },
//         "end": {
//           "line": 141,
//           "column": 106,
//           "offset": 5191
//         },
//         "indent": []
//       }
//     }
//   ],
//   "position": {
//     "start": {
//       "line": 1,
//       "column": 1,
//       "offset": 0
//     },
//     "end": {
//       "line": 141,
//       "column": 106,
//       "offset": 5191
//     }
//   }
// })
// )