export default function contentIndex() {
  return {
    Angle: {
      title: 'Angles',
      path: '/content/Math/Geometry_1',
      uid: 'Angle',
      topics: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: 'Introduction to Angles.',
            htmlTitle: 'Introduction to Angles',
            htmlDescription: 'Introduction to the concept of angle',
            fullContent: true,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullContent: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullContent: false,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: 'Summary of Angles introduction',
            htmlTitle: 'Summary of Angles introduction',
            htmlDescription: 'Definition of an angle and where the name comes from',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'Circle',
      ],
      enabled: true,
    },
    AngleGroups: {
      title: 'Angle Groups',
      path: '/content/Math/Geometry_1',
      uid: 'AngleGroups',
      topics: {
        examples: {
          base: {
            type: 'singlePage',
            title: 'Example problems with complementary, supplementary and explementary angles',
            description: '',
            htmlTitle: 'Example problems with complementary angles, supplementary angles and explementary angles',
            htmlDescription: 'Identify and calculate complementary, supplementary and explementary angles',
            fullContent: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: 'Explanation of complementary, supplementary, and explementary angles.',
            htmlTitle: 'Complementary, supplementary and explementary angles explanation',
            htmlDescription: 'What are complementary angles, supplementary angles and explementary angles',
            fullContent: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External Links to Angle Groups',
            description: 'External links to sources of information for Angle Groups>',
            htmlTitle: 'Adjacent Angles, Complementary Angles, Supplementary Angles and Explementary Angles Links',
            htmlDescription: 'Explanations, proofs, examples and questions about adjacent angles',
            fullContent: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullContent: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullContent: false,
          },
        },
        quiz: {
          base: {
            type: 'singlePage',
            title: 'Complementary, Supplementary and Explementary Angles',
            description: 'Questions to identify and calculate complementary, supplementary and explementary angles',
            htmlTitle: 'Complementary, Supplementary and Explementary angles quiz',
            htmlDescription: 'Identify and calculate angles that are complementary, supplementary and explementary',
            fullContent: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Complementary, Supplementary and Explementary Angles.',
            description: 'Summary of complementary, supplementary and explementary Angles.',
            htmlTitle: 'Complementary, supplementary and explementary angles summary',
            htmlDescription: 'Summary of complementary angles, supplementary angles and explementary angles',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'AngleTypes',
      ],
      enabled: true,
    },
    AngleTypes: {
      title: 'Angle Types',
      path: '/content/Math/Geometry_1',
      uid: 'AngleTypes',
      topics: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Right Angle, Acute Angle, Obtuse Angle, Reflex Angle, Straight Angle, Full Angle',
            htmlDescription: 'Dynamic diagram that lets you explore the different types of important angles',
            fullContent: true,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullContent: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullContent: false,
          },
        },
        quiz: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Quiz - set the angle to be either acute, right, obtuse, straight, reflex or full',
            htmlDescription: '',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'Degrees',
      ],
      enabled: true,
    },
    AnglesAtIntersections: {
      title: 'Angles at Intersections',
      path: '/content/Math/Geometry_1',
      uid: 'AnglesAtIntersections',
      topics: {
        discover: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Self discover the relationships between opposite angles, corresponding angles, alternate angles and interior angles',
            htmlDescription: 'Using parallel lines and supplementary angles, all these relationships can be proven',
            fullContent: true,
          },
        },
        examples: {
          base: {
            type: 'singlePage',
            title: 'Examples of related angles',
            description: 'Examples of calculating opposite, corresponding, alternate and interior angles',
            htmlTitle: 'Opposite angles, corresponding angles, alternate angles and interior angles calculation examples',
            htmlDescription: 'Examples of finding angles in different geometries using the concepts of opposite, corresponding, alternate, interior and supplementary angles',
            fullContent: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Opposite angles, corresponding angles, alternate angles and interior angles',
            htmlDescription: 'Introduction to opposite, corresponding, alternate and interior angles and their proofs',
            fullContent: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to sources of information for opposite, corresponding, alternate and interior angles',
            htmlTitle: 'Opposite angles, corresponding angles, alternate angles and interior angles links',
            htmlDescription: 'Various external links covering definition and examples of opposite, corresponding, alternate and interior angles when two or three lines intersect',
            fullContent: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullContent: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullContent: false,
          },
        },
        quiz: {
          base: {
            type: 'presentation',
            title: 'Simple geometries',
            description: '',
            htmlTitle: 'Quiz - Find the unknown angle in a system of opposite, corresponding, alternate and interior angles',
            htmlDescription: 'Dynamic quiz where no two questions are the same',
            fullContent: true,
          },
          complex: {
            type: 'singlePage',
            title: 'More complex geometries',
            description: 'Find angles using opposite, corresponding, alternate, interior and supplementary angles',
            htmlTitle: 'Examples using opposite angles, corresponding angles, alternate angles, interior angles and supplementary angles',
            htmlDescription: 'Find angles using opposite, corresponding, alternate, interior and supplementary angles',
            fullContent: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Summary of opposite, corresponding, adjacent and interior angles',
            htmlDescription: '',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'ParallelLines',
      ],
      enabled: true,
    },
    Area: {
      title: 'Area and Rectangles',
      path: '/content/Math/Geometry_1',
      uid: 'Area',
      topics: {
        examples: {
          base: {
            type: 'singlePage',
            title: 'Examples of area',
            description: '',
            htmlTitle: 'Area examples',
            htmlDescription: 'Calculation examples of areas for different shapes',
            fullContent: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Introduction to area, rectangle area and square area',
            htmlDescription: 'Concept of area, why they it is measured in squares and why areas of rectangles and squares are what they are',
            fullContent: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to Area',
            htmlTitle: 'Introduction to Area Links',
            htmlDescription: 'External links covering an introduction to area, and areas of rectangles and squares',
            fullContent: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullContent: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullContent: false,
          },
        },
        quiz: {
          base: {
            type: 'presentation',
            title: 'Create an area',
            description: '',
            htmlTitle: 'Quiz: Create a rectangle or square with area',
            htmlDescription: 'Create a rectangle or square that has some defined area on this dynamic page',
            fullContent: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Summary of area, rectangle area and square area.',
            htmlDescription: 'Summary of area concept, and equations for rectangle area and square area',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'RectanglesAndSquares',
      ],
      enabled: true,
    },
    AreaCircle: {
      title: 'Area of a Circle',
      path: '/content/Math/Geometry_1',
      uid: 'AreaCircle',
      topics: {
        discover: {
          simple: {
            type: 'singlePage',
            title: 'Base',
            description: '',
            htmlTitle: 'Self discover what the area of a circle is',
            htmlDescription: 'Figure out why the area of a circle is what it is',
            fullContent: true,
          },
        },
        examples: {
          base: {
            type: 'singlePage',
            title: 'Examples of Circle Area',
            description: '',
            htmlTitle: 'Circle area examples',
            htmlDescription: 'Examples of calculations involving circle area',
            fullContent: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Intuitive derivation of circle area',
            htmlDescription: 'Find the equation for circle area using triangles',
            fullContent: true,
          },
          static: {
            type: 'singlePage',
            title: 'Single Page Full explanation',
            description: '',
            htmlTitle: 'Intuitive derivation of circle area in a single page',
            htmlDescription: 'Using triangles, find the equation to area of a circle',
            fullContent: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to sources of information for Circle Area',
            htmlTitle: 'Circle Area Links',
            htmlDescription: 'Links for circle area explanations, proofs and examples',
            fullContent: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullContent: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullContent: false,
          },
        },
        quiz: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Quiz: Calculate the circle property',
            htmlDescription: 'Calculate circle property from either the radius, diameter, area or circumference',
            fullContent: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Summary of Circle Area',
            htmlDescription: 'Area of a circle equation',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'AreaTriangle',
      ],
      enabled: true,
    },
    AreaTriangle: {
      title: 'Area of a Triangle',
      path: '/content/Math/Geometry_1',
      uid: 'AreaTriangle',
      topics: {
        discover: {
          simple: {
            type: 'singlePage',
            title: 'Base',
            description: '',
            htmlTitle: 'Self discover what the area of a triangle is',
            htmlDescription: 'Figure out why the area of a triangle depends just on its base and height',
            fullContent: true,
          },
        },
        examples: {
          base: {
            type: 'singlePage',
            title: 'Examples of ',
            description: '',
            htmlTitle: 'Triangle area examples',
            htmlDescription: 'Calculation examples using area of a triangle',
            fullContent: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Triangle Area derivation and proof',
            htmlDescription: 'Explanation on why area of a triangle is what it is',
            fullContent: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to sources of information for <TOPIC>',
            htmlTitle: 'Triangle area links',
            htmlDescription: 'Links to explanations, proofs, examples and questions about triangle area',
            fullContent: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullContent: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullContent: false,
          },
        },
        quiz: {
          base: {
            type: 'presentation',
            title: 'Make triangle with target area',
            description: '',
            htmlTitle: 'Quiz - Create a triangle with a given area',
            htmlDescription: 'Drag the corners of a triangle to change its height and base to get the target area',
            fullContent: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Area of a triangle',
            htmlDescription: 'Summary of triangle area',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'Area',
      ],
      enabled: true,
    },
    Circle: {
      title: 'Circles',
      path: '/content/Math/Geometry_1',
      uid: 'Circle',
      topics: {
        examples: {
          static: {
            type: 'singlePage',
            title: 'Circle Radius, Diameter and Circumference',
            description: 'Examples calculations of diameter, radius and circumference',
            htmlTitle: 'Example calculations of radius, diameter and circumference',
            htmlDescription: 'Examples showing how to calculate radius, diameter and circumference of circles from known properties',
            fullContent: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: 'Presentation form - interactive.',
            htmlTitle: 'Introduction to circles, their history and properties',
            htmlDescription: 'Introduction to circle, diameter, radius, circumference, center point. Relationships between radius, diameter and circumference.',
            fullContent: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to information on circles',
            htmlTitle: 'Circles, circle properties and relationships links',
            htmlDescription: 'Explanations, proofs, examples and questions about Circles',
            fullContent: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullContent: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullContent: false,
          },
        },
        quiz: {
          calcProperties: {
            type: 'singlePage',
            title: 'Calculate Properties',
            description: 'Calculate properties of a circle from other properties',
            htmlTitle: 'Calculate circle properties',
            htmlDescription: 'Calculate properties of a circle from other properties',
            fullContent: true,
          },
          identifyProperties: {
            type: 'presentation',
            title: 'Identify Properties',
            description: 'Identify the properties of a circle.',
            htmlTitle: 'Quiz - Identify the circle property',
            htmlDescription: 'Given four different properties, click on the one that is requested',
            fullContent: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Circle Properties',
            description: 'Presentation form - interactive.',
            htmlTitle: 'Properties of a circle summary',
            htmlDescription: 'Diameter, circumference, radius and center point, and the relationships between them',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'Introduction',
      ],
      enabled: true,
    },
    CongruentTriangles: {
      title: 'Congruent Triangles',
      path: '/content/Math/Geometry_1',
      uid: 'CongruentTriangles',
      topics: {
        discover: {
          simple: {
            type: 'singlePage',
            title: 'Base',
            description: '',
            htmlTitle: 'Self discover congruent triangles and how you can test if two triangles are the same',
            htmlDescription: 'Given the definition of congruent, you can work out the tests to tell if two triangles are congruent',
            fullContent: true,
          },
        },
        examples: {
          base: {
            type: 'singlePage',
            title: 'Examples of finding and using Congruent Triangles',
            description: '',
            htmlTitle: 'Examples on how to find and use congruent triangles',
            htmlDescription: 'Examples showing how to identify congruent triangles, and then how to use the triangles to find unknown properties',
            fullContent: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Congruent triangles and how to determine congruence',
            htmlDescription: 'Introduction to congruent triangles and intuitive reasoning behind the SAS, SSA, ASA, AAS, SSS, AAA congruence tests',
            fullContent: true,
          },
          fromSAS: {
            type: 'singlePage',
            title: 'Show SSS, ASA and AAS from SAS',
            description: '',
            htmlTitle: 'Prove SSS, ASA and AAS from SAS',
            htmlDescription: 'Proofs for SSS, ASA and AAS triangle congruence from SAS',
            fullContent: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to sources of information for congruent triangles',
            htmlTitle: 'Congruent triangles links',
            htmlDescription: 'Various external links covering definition and examples congruent triangles and how to test for them',
            fullContent: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullContent: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullContent: false,
          },
        },
        quiz: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Quiz - Determine if two triangles are congruent',
            htmlDescription: 'Given three properties of two triangles, can you determine if they are congruent?',
            fullContent: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Summary of congruent triangles and SAS, SSA, ASA, AAS, SSS, AAA',
            htmlDescription: 'Facts only summary of congruent triangles and congruent triangle tests',
            fullContent: true,
          },
        },
        ta: {
          sss: {
            type: 'presentation',
            title: 'SSS',
            description: '',
            htmlTitle: 'Are triangles the same (congruent) if you have just three side lengths?',
            htmlDescription: 'Change side lengths and form triangles to see what is possible',
            fullContent: false,
          },
          tri: {
            type: 'presentation',
            title: 'Triangle',
            description: 'Interactive triangle',
            htmlTitle: 'Interactive triangle to explore congruence possibilities',
            htmlDescription: 'Make different triangles to determine which set of properties is required to know if triangles are congruent',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'Triangles',
      ],
      enabled: true,
    },
    Degrees: {
      title: 'Degrees',
      path: '/content/Math/Geometry_1',
      uid: 'Degrees',
      topics: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Explanation on why we use degrees as a measure of angle',
            htmlDescription: 'How angle is measured, why use degrees and common angles in degrees',
            fullContent: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to sources of information for Degrees',
            htmlTitle: 'Measuring angles in degrees links',
            htmlDescription: 'Explanations, and examples about measuring angles in degrees',
            fullContent: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullContent: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullContent: false,
          },
        },
        quiz: {
          base: {
            type: 'singlePage',
            title: 'General Questions about Degrees',
            description: 'Answer general questions about measuring angle and degrees',
            htmlTitle: 'Quiz - Measuring angles and degrees',
            htmlDescription: 'Answer general questions about measuring angle and degrees',
            fullContent: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Summary of using degrees to measure angle',
            htmlDescription: 'History of word, interactive diagram to see different angles in degrees',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'Angle',
      ],
      enabled: true,
    },
    Equilateral: {
      title: 'Equilateral Triangle',
      path: '/content/Math/Geometry_1',
      uid: 'Equilateral',
      topics: {
        discover: {
          simple: {
            type: 'singlePage',
            title: 'Base',
            description: '',
            htmlTitle: 'Self discover why an equilateral trianglehas equal angles',
            htmlDescription: 'Figure out why any equilateral triangle also have three equal angles',
            fullContent: true,
          },
        },
        examples: {
          base: {
            type: 'singlePage',
            title: 'Isosceles Triangles',
            description: '',
            htmlTitle: 'Examples of using equilateral triangles',
            htmlDescription: 'Examples showing how how to use the properties of an equilateral triangle to solve different problems',
            fullContent: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Equilateral triangle derivation from an isosceles triangle',
            htmlDescription: 'Use isosceles triangles to show the properties of an equilateral triangle, and the relationship of its angles',
            fullContent: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to equilateral triangles',
            htmlTitle: 'Equilateral triangles links',
            htmlDescription: 'External sources of information about equilateral triangles',
            fullContent: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullContent: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullContent: false,
          },
        },
        quiz: {
          base: {
            type: 'singlePage',
            title: 'Equilateral Quiz',
            description: '',
            htmlTitle: 'Equilateral triangles quiz',
            htmlDescription: 'Solve problems with equilateral triangles',
            fullContent: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Equilateral triangle summary',
            htmlDescription: 'Interactive diagram showing properties of an equilateral triangle',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'Isosceles',
      ],
      enabled: true,
    },
    ExternalAngles: {
      title: 'External Angle of a Triangle',
      path: '/content/Math/Geometry_1',
      uid: 'ExternalAngles',
      topics: {
        discover: {
          simple: {
            type: 'singlePage',
            title: 'Base',
            description: '',
            htmlTitle: 'Self discover the relationship between the external and internal angles of a triangle',
            htmlDescription: 'Using knowledge of total angle in a triangle, and supplementary angles you can find the relationship between a triangle\'s external angle and its two opposite internal angles',
            fullContent: true,
          },
        },
        examples: {
          base: {
            type: 'singlePage',
            title: 'External angle calculations',
            description: '',
            htmlTitle: 'External angle calculation examples',
            htmlDescription: 'Examples of geometries where calculating the external angle of a triangle is needed',
            fullContent: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'External angles (also called exterior angles) in a triangle explanation through presentation',
            htmlDescription: 'Proof of external angles in a triangle equalling sum of opposite internal angles',
            fullContent: true,
          },
          simple: {
            type: 'singlePage',
            title: 'Full explanation in single page',
            description: '',
            htmlTitle: 'External angles (also called exterior angles)  in a triangle as a single page explanation',
            htmlDescription: 'Proof of external angles in a triangle equalling sum of opposite internal angles',
            fullContent: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to sources of information for External Angles of Triangles',
            htmlTitle: 'Links for external angles of a triangle',
            htmlDescription: 'Links with explanations, examples and proofs for external angles of a triangle',
            fullContent: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullContent: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullContent: false,
          },
        },
        quiz: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Quiz - find the external angle of a triangle',
            htmlDescription: 'Find the external angle (also called exterior angle) in a triangle quiz',
            fullContent: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'External angle summary',
            description: '',
            htmlTitle: 'Summary of triangle external angle (or exterior angle)',
            htmlDescription: 'Interactive diagram showing and describing the external angle of a triangle',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'Triangles',
      ],
      enabled: true,
    },
    Introduction: {
      title: 'Why Study Shapes?',
      path: '/content/Math/Geometry_1',
      uid: 'Introduction',
      topics: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Descriptive',
            description: 'Motivation to studying shapes.',
            htmlTitle: 'Why Study Shapes?',
            htmlDescription: 'Introduction to shapes, naming, history and why we should study them',
            fullContent: true,
          },
          singlePage: {
            type: 'singlePage',
            title: 'Descriptive - Single Page',
            description: 'Motivation to studying shapes.',
            htmlTitle: 'Why Study Shapes?',
            htmlDescription: 'Introduction to shapes, naming, history and why we should study them',
            fullContent: true,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullContent: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullContent: false,
          },
        },
      },
      dependencies: [
      ],
      enabled: true,
    },
    Isosceles: {
      title: 'Isosceles Triangle',
      path: '/content/Math/Geometry_1',
      uid: 'Isosceles',
      topics: {
        discover: {
          simple: {
            type: 'singlePage',
            title: 'Base',
            description: '',
            htmlTitle: 'Self discover why an isosceles triangles can have two equal sides and angles',
            htmlDescription: 'Figure out why any triangle that has two equal sides also has two equal angles, and why any triangle with two equal angles has two equal sides',
            fullContent: true,
          },
        },
        examples: {
          base: {
            type: 'singlePage',
            title: 'Isosceles Triangles',
            description: '',
            htmlTitle: 'Examples of using isosceles triangles',
            htmlDescription: 'Examples showing how how to use the properties of an isosceles triangle to solve different problems',
            fullContent: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Isosceles triangles and proof',
            htmlDescription: 'Proof for if two sides are equal why two angles are equal and vise versa',
            fullContent: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to isosceles triangles',
            htmlTitle: 'Isosceles triangles links',
            htmlDescription: 'External sources of information about isosceles triangles',
            fullContent: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullContent: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullContent: false,
          },
        },
        quiz: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Quiz - Find the missing side or angle of an isosceles triangle',
            htmlDescription: 'Given a set of sides and angles, find the missing one',
            fullContent: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Summary of Isosceles triangle and its properties',
            htmlDescription: 'Isosceles triangle, side and angle equality, split line properties',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'CongruentTriangles',
      ],
      enabled: true,
    },
    ParallelLineDistance: {
      title: 'Parallel Line Distance',
      path: '/content/Math/Geometry_1',
      uid: 'ParallelLineDistance',
      topics: {
        discover: {
          simple: {
            type: 'singlePage',
            title: 'Base',
            description: '',
            htmlTitle: 'Self discover the properties of distance between parallel lines',
            htmlDescription: 'Figure out why the shortest distance between parallel lines is perpendicular and constant',
            fullContent: true,
          },
        },
        examples: {
          base: {
            type: 'singlePage',
            title: 'Examples of ',
            description: '',
            htmlTitle: 'Parallel line distance examples',
            htmlDescription: 'Examples of problems where know the properties of parallel line distance is useful',
            fullContent: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Introduction to the distance between parallel lines',
            htmlDescription: 'Investigate the property of distance between parallel lines',
            fullContent: true,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullContent: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullContent: false,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Summary of parallel line distance property',
            htmlDescription: 'Parallel line distance is the length of the perpendicular line between them',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'PointLineDistance',
      ],
      enabled: true,
    },
    ParallelLines: {
      title: 'Parallel Lines',
      path: '/content/Math/Geometry_1',
      uid: 'ParallelLines',
      topics: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Interactive introduction to parallel lines',
            htmlDescription: 'See what parallel lines are, and when lines are parallel',
            fullContent: true,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullContent: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullContent: false,
          },
        },
        quiz: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Quiz - Move lines to be parallel and find parallel lines',
            htmlDescription: 'Interactive quiz to make lines parallel, and find parallel lines in a selection of lines',
            fullContent: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Introduction to parallel lines summary',
            htmlDescription: '',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'AngleGroups',
      ],
      enabled: true,
    },
    ParallelSplitOfTriangle: {
      title: 'Parallel Split of Triangle',
      path: '/content/Math/Geometry_1',
      uid: 'ParallelSplitOfTriangle',
      topics: {
        discover: {
          simple: {
            type: 'singlePage',
            title: 'Base',
            description: '',
            htmlTitle: 'Self discover the properties of a triangle split with a parallel line',
            htmlDescription: 'Figure out why a triangle split with a parallel line will create a proportional triangle',
            fullContent: true,
          },
        },
        examples: {
          base: {
            type: 'singlePage',
            title: 'Examples of triangles split with parallel lines',
            description: '',
            htmlTitle: 'Triangles split with parallel lines calculation examples',
            htmlDescription: 'Examples of triangle calculations where a triangle is split with a parallel line',
            fullContent: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Descriptive',
            description: '',
            htmlTitle: 'Splitting a triangle with a parallel line',
            htmlDescription: 'Proof that splitting a triangle with a parallel line results in a similar triangle',
            fullContent: true,
          },
          static: {
            type: 'singlePage',
            title: 'Full Proof',
            description: 'Proof showing the resulting triangle has proportional sides',
            htmlTitle: 'Similar Triangles Proof',
            htmlDescription: 'Proofs showing why equiangular triangles, and proportional triangles are similar',
            fullContent: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to sources of information for Parallel Split of a Triangle',
            htmlTitle: 'Links: Parallel split of a triangle',
            htmlDescription: 'External links looking at triangle proportionality and parallel splits of a triangle.',
            fullContent: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullContent: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullContent: false,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'External angle summary',
            description: '',
            htmlTitle: 'Splitting a triangle with a parallel line',
            htmlDescription: 'Summary showing splitting a triangle with a parallel line results in a similar triangle',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'ParallelLineDistance',
      ],
      enabled: true,
    },
    PointLineDistance: {
      title: 'Point to Line Distance',
      path: '/content/Math/Geometry_1',
      uid: 'PointLineDistance',
      topics: {
        discover: {
          simple: {
            type: 'singlePage',
            title: 'Base',
            description: '',
            htmlTitle: 'Self discover the angle of the distance between a point and line',
            htmlDescription: 'Figure out why the shortest distance between a point and a line is perpendicular to the line',
            fullContent: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Introduction to distance between a point and line',
            htmlDescription: 'Properties of distance between point and a line',
            fullContent: true,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullContent: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullContent: false,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Summary of point line distance property',
            htmlDescription: '',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'RightAngleTriangles',
      ],
      enabled: true,
    },
    Quadrangles: {
      title: 'Quadrangles',
      path: '/content/Math/Geometry_1',
      uid: 'Quadrangles',
      topics: {
        discover: {
          simple: {
            type: 'singlePage',
            title: 'Base',
            description: '',
            htmlTitle: 'Self discover the total internal angle of a quadrangle',
            htmlDescription: 'Figure out the total internal angle of a quadrangle or quadrilateral yourself',
            fullContent: true,
          },
        },
        examples: {
          base: {
            type: 'singlePage',
            title: 'Quadrangle internal angle calculations',
            description: '',
            htmlTitle: 'Quadrangle or Quadrilateral interal angle calculation examples',
            htmlDescription: 'Examples of geometries where calculating the total internal angle of a quadrangle is needed',
            fullContent: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Introduction to quadrangles and quadrilaterals',
            htmlDescription: 'Quadrangles, quadrilaterals and their properties',
            fullContent: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to sources of information for quadrangles and quadrilaterals',
            htmlTitle: 'Links for quadrangles and quadrilaterals',
            htmlDescription: 'Links with explanations, examples and proofs quadrangles and quadrilaterals',
            fullContent: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullContent: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullContent: false,
          },
        },
        quiz: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Quiz - Find the unknown angle in the quadrangle',
            htmlDescription: 'Dynamic quiz where no two questions are the same',
            fullContent: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Quadrangles (quadrilaterals) summary',
            htmlDescription: '',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'Triangles',
      ],
      enabled: true,
    },
    Radians: {
      title: 'Radians',
      path: '/content/Math/Geometry_1',
      uid: 'Radians',
      topics: {
        examples: {
          static: {
            type: 'singlePage',
            title: 'Example problems using Radians',
            description: 'Use radians to calculate radius, angle and arc length',
            htmlTitle: 'Calculating radius, arc length and angle using radians',
            htmlDescription: 'Example problems showing how to use radians to calculate radius, arc length and angle when given two other circle properties',
            fullContent: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Introduction to radians and why we use them',
            htmlDescription: 'Radians and their relationship with arc length and radius',
            fullContent: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to information on radians',
            htmlTitle: 'Links introducing radians',
            htmlDescription: 'Explanations, proofs, examples and questions about radians',
            fullContent: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullContent: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullContent: false,
          },
        },
        quiz: {
          base: {
            type: 'presentation',
            title: 'Change Circle to Match',
            description: '',
            htmlTitle: 'Quiz: Find the arc or angle that matches the target',
            htmlDescription: 'Interactive quiz where you can change the diagram to find the target angle or arc length',
            fullContent: true,
          },
          calc: {
            type: 'singlePage',
            title: 'Calculate Properties with Radians',
            description: 'Calculate properties of a circle from other properties using radians',
            htmlTitle: 'Calculate circle properties using radians',
            htmlDescription: 'Calculate properties of a circle from other properties using radians',
            fullContent: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Summary of what radians are and their relationship to radius and arc length',
            htmlDescription: '',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'Degrees',
      ],
      enabled: true,
    },
    RectanglesAndSquares: {
      title: 'Rectangles and Squares',
      path: '/content/Math/Geometry_1',
      uid: 'RectanglesAndSquares',
      topics: {
        discover: {
          simple: {
            type: 'singlePage',
            title: 'Base',
            description: '',
            htmlTitle: 'Self discover why a rectangles opposite sides are equal and parallel',
            htmlDescription: 'Figure out why a rectangle has opposite sides that are equal and parallel',
            fullContent: true,
          },
        },
        examples: {
          base: {
            type: 'singlePage',
            title: 'Rectangle calculation examples',
            description: '',
            htmlTitle: 'Examples of using rectangle properties',
            htmlDescription: 'Examples showing how to use the properties of a rectangle to examine geometries',
            fullContent: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Introduction to rectangles and squares and derivation of their properties',
            htmlDescription: 'Proof showing why a rectangles opposite sides are equal and parallel',
            fullContent: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to introductions to rectangles and squares',
            htmlTitle: 'Rectangle and square introduction links',
            htmlDescription: 'External links covering an introduction to rectangles and squares',
            fullContent: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullContent: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullContent: false,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Summary of rectangle and square properties',
            htmlDescription: '',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'Quadrangles',
        'CongruentTriangles',
      ],
      enabled: true,
    },
    RightAngleTriangles: {
      title: 'Right Angle Triangles',
      path: '/content/Math/Geometry_1',
      uid: 'RightAngleTriangles',
      topics: {
        discover: {
          simple: {
            type: 'singlePage',
            title: 'Base',
            description: '',
            htmlTitle: 'Self discover the properties of a right angle triangle',
            htmlDescription: 'Figure out why the hypotenuse is the longest side and find the pythagoean theorem',
            fullContent: true,
          },
        },
        examples: {
          base: {
            type: 'singlePage',
            title: 'Examples of Right Angle Triangle calculations',
            description: '',
            htmlTitle: 'Right Angle Triangle example calculations',
            htmlDescription: 'Examples showing how to use the properties of right angle triangles to solve various problems',
            fullContent: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: 'Properties of right angle triangles, and the Pythagorean theorem.',
            htmlTitle: 'Right angle triangle introduction and pythagoean theorem proof',
            htmlDescription: 'Right angle triangle introduction, hypotenuse, area and pythagorean theorem derivation.',
            fullContent: true,
          },
          pythagorus_proof: {
            type: 'singlePage',
            title: 'Derivation of Pythagorean Theorem',
            description: 'Derivation using area of four right angle triangles',
            htmlTitle: 'Pythagorean Theorem Derivation',
            htmlDescription: 'Derivation using area of four right angle triangles',
            fullContent: false,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to sources of information for Right Angle Triangles',
            htmlTitle: 'Links for Right Angle Triangles',
            htmlDescription: 'External explanations of right angle triangles',
            fullContent: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullContent: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullContent: false,
          },
        },
        quiz: {
          base: {
            type: 'presentation',
            title: 'Find the Unknown Angle',
            description: '',
            htmlTitle: 'Quiz - Find the unknown angle, side or area in a right angle triangle.',
            htmlDescription: 'Dynamic quiz where no two questions are the same',
            fullContent: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Properties',
            description: '',
            htmlTitle: 'Right Angle Triangle Summary',
            htmlDescription: 'Right angle triangle definition including hypotenuse, area and pythagorean theorem.',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'AreaTriangle',
      ],
      enabled: true,
    },
    SideAngleRelationship: {
      title: 'Side Angle Relationships',
      path: '/content/Math/Geometry_1',
      uid: 'SideAngleRelationship',
      topics: {
        discover: {
          simple: {
            type: 'singlePage',
            title: 'Base',
            description: '',
            htmlTitle: 'Self discover why longer sides are opposite larger angles in a triangle',
            htmlDescription: 'Figure out why the length of a triangle\'s side depends on the size of the oppostite angle',
            fullContent: true,
          },
        },
        examples: {
          base: {
            type: 'singlePage',
            title: 'Examples of triangle side angle relationships',
            description: '',
            htmlTitle: 'Triangle side angle relationship examples',
            htmlDescription: 'Use the relationships between a triangles side and angle to solve different geometries',
            fullContent: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Introduction to relationship between triangle side length and angle',
            htmlDescription: 'Proof of why larger angles are opposite longer sides in a triangle',
            fullContent: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to triangle side angle relationships',
            htmlTitle: 'Triangle side angle relationship links',
            htmlDescription: 'External links covering the relationship between the size of angles and length of sides in a triangle',
            fullContent: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullContent: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullContent: false,
          },
        },
        quiz: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Quiz - Find the largest or smallest side or angle',
            htmlDescription: 'Dynamic quiz where no two questions are the same',
            fullContent: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Summary of relationship between side and angle in a triangle',
            htmlDescription: '',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'Isosceles',
      ],
      enabled: true,
    },
    SimilarTriangles: {
      title: 'Similar Triangles',
      path: '/content/Math/Geometry_1',
      uid: 'SimilarTriangles',
      topics: {
        explanation: {
          equilangularIsSimilarProof: {
            type: 'singlePage',
            title: 'Equilangular Triangles are Similar - Proof 2',
            description: 'Proof showing why equiangular triangles are proportional triangles and therefore similar',
            htmlTitle: 'Equilangular Triangles are Similar Proof',
            htmlDescription: 'Proof showing why equiangular triangles are proportional triangles and therefore similar',
            fullContent: false,
          },
          equilangularProofBrief: {
            type: 'singlePage',
            title: 'Equilangular Triangles are Similar - Proof 2 (Brief)',
            description: 'Succinct proof showing why equiangular triangles, are proportional triangles and therefore similar',
            htmlTitle: 'Triangles with equal angles are similar proof',
            htmlDescription: 'Succinct proof showing why equiangular triangles, are proportional triangles and therefore similar',
            fullContent: false,
          },
          static: {
            type: 'singlePage',
            title: 'Descriptive',
            description: 'Proofs showing why equiangular triangles, and proportional triangles are similar',
            htmlTitle: 'Similar Triangles Proof',
            htmlDescription: 'Proofs showing why equiangular triangles, and proportional triangles are similar',
            fullContent: true,
          },
          staticBrief: {
            type: 'singlePage',
            title: 'In Brief',
            description: 'Succinct proofs showing why equiangular triangles, and proportional triangles are similar',
            htmlTitle: 'Similar Triangles Proof',
            htmlDescription: 'Proofs showing why equiangular triangles, and proportional triangles are similar',
            fullContent: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External Links',
            description: 'External links to sources of information for Similar Triangles',
            htmlTitle: 'Similar Triangles Links',
            htmlDescription: 'Explanations, proofs, examples and questions about Similar Triangles>',
            fullContent: false,
          },
        },
      },
      dependencies: [
        'ParallelSplitOfTriangle',
      ],
      enabled: false,
    },
    CalculatingPi: {
      title: 'Calculating Pi',
      path: '/content/Math/Geometry_1/ToDo',
      uid: 'CalculatingPi',
      topics: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: '',
            htmlDescription: '',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'RightAngleTriangles',
      ],
      enabled: false,
    },
    Triangles: {
      title: 'Triangles',
      path: '/content/Math/Geometry_1',
      uid: 'Triangles',
      topics: {
        discover: {
          base: {
            type: 'presentation',
            title: 'Interactive',
            description: '',
            htmlTitle: 'Self discover what a triangle is, the types of triangle and the relationship between angles.',
            htmlDescription: 'Stand together with the great mathematicians and scientists by discovering the relationship between angles of a triangle yourself',
            fullContent: true,
          },
        },
        examples: {
          base: {
            type: 'singlePage',
            title: 'Triangle Angles',
            description: 'Example calculations of angles in a triangle',
            htmlTitle: 'Example calculations of angles in a triangle',
            htmlDescription: 'Calculating angles in various geometries using sum of angles in a triangle',
            fullContent: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Introduction to triangles and their properties',
            htmlDescription: 'Proof that triangle total angle equals 180º',
            fullContent: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to sources of information for Triangles>',
            htmlTitle: 'Triangles Links',
            htmlDescription: 'Explanations, proofs, examples and questions about Triangles',
            fullContent: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullContent: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullContent: false,
          },
        },
        quiz: {
          base: {
            type: 'presentation',
            title: 'Total Angle',
            description: '',
            htmlTitle: 'Quiz - Find the unknown angle in the triangle',
            htmlDescription: 'Dynamic quiz where no two questions are the same',
            fullContent: true,
          },
          types: {
            type: 'presentation',
            title: 'Triangle Types',
            description: '',
            htmlTitle: 'Quiz - Create a triangle of given type',
            htmlDescription: 'Create an acute triangle, right angle triangle, obtuse triangle, equilateral triangle, isosceles triangle or scalene triangle',
            fullContent: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Summary of triangles and their properties',
            htmlDescription: '',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'AnglesAtIntersections',
      ],
      enabled: true,
    },
    Chord: {
      title: 'Chord',
      path: '/content/Math/Trigonometry_1',
      uid: 'Chord',
      topics: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: '',
            htmlDescription: '',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'Sine',
      ],
      enabled: false,
    },
    Cosecant: {
      title: 'Cosecant',
      path: '/content/Math/Trigonometry_1',
      uid: 'Cosecant',
      topics: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: '',
            htmlDescription: '',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'Secant',
      ],
      enabled: false,
    },
    Cosine: {
      title: 'Cosine',
      path: '/content/Math/Trigonometry_1',
      uid: 'Cosine',
      topics: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: '',
            htmlDescription: '',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'Sine',
      ],
      enabled: false,
    },
    Cotangent: {
      title: 'Cotangent',
      path: '/content/Math/Trigonometry_1',
      uid: 'Cotangent',
      topics: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: '',
            htmlDescription: '',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'Pythagoras',
      ],
      enabled: false,
    },
    LawOfCosines: {
      title: 'Law of Cosines',
      path: '/content/Math/Trigonometry_1',
      uid: 'LawOfCosines',
      topics: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: '',
            htmlDescription: '',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'LawOfSines',
      ],
      enabled: false,
    },
    LawOfSines: {
      title: 'Law of Sines',
      path: '/content/Math/Trigonometry_1',
      uid: 'LawOfSines',
      topics: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: '',
            htmlDescription: '',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'Pythagoras',
      ],
      enabled: false,
    },
    Pythagoras: {
      title: 'Pythagorean Identity',
      path: '/content/Math/Trigonometry_1',
      uid: 'Pythagoras',
      topics: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: '',
            htmlDescription: '',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'Tangent',
      ],
      enabled: false,
    },
    Secant: {
      title: 'Secant',
      path: '/content/Math/Trigonometry_1',
      uid: 'Secant',
      topics: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: '',
            htmlDescription: '',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'Pythagoras',
      ],
      enabled: false,
    },
    Sine: {
      title: 'Sine',
      path: '/content/Math/Trigonometry_1',
      uid: 'Sine',
      topics: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: '',
            htmlDescription: '',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'UnitCircle',
      ],
      enabled: false,
    },
    Tangent: {
      title: 'Tangent',
      path: '/content/Math/Trigonometry_1',
      uid: 'Tangent',
      topics: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: '',
            htmlDescription: '',
            fullContent: true,
          },
        },
      },
      dependencies: [
        'Chord',
      ],
      enabled: false,
    },
    UnitCircle: {
      title: 'Unit Circle',
      path: '/content/Math/Trigonometry_1',
      uid: 'UnitCircle',
      topics: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: '',
            htmlDescription: '',
            fullContent: true,
          },
        },
      },
      dependencies: [
      ],
      enabled: false,
    },
  };
}