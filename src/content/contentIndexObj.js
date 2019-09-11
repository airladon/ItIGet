export default function contentIndex() {
  return {
    Angle: {
      title: 'Angles',
      path: '/content/Math/Geometry_1',
      uid: 'Angle',
      approaches: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: 'Introduction to Angles.',
            htmlTitle: 'Introduction to Angles',
            htmlDescription: 'Introduction to the concept of angle',
            fullTopic: true,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullTopic: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullTopic: false,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: 'Summary of Angles introduction',
            htmlTitle: 'Summary of Angles introduction',
            htmlDescription: 'Definition of an angle and where the name comes from',
            fullTopic: true,
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
      approaches: {
        examples: {
          base: {
            type: 'singlePage',
            title: 'Example problems with complementary, supplementary and explementary angles',
            description: '',
            htmlTitle: 'Example problems with complementary angles, supplementary angles and explementary angles',
            htmlDescription: 'Identify and calculate complementary, supplementary and explementary angles',
            fullTopic: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: 'Explanation of complementary, supplementary, and explementary angles.',
            htmlTitle: 'Complementary, supplementary and explementary angles explanation',
            htmlDescription: 'What are complementary angles, supplementary angles and explementary angles',
            fullTopic: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External Links to Angle Groups',
            description: 'External links to sources of information for Angle Groups>',
            htmlTitle: 'Adjacent Angles, Complementary Angles, Supplementary Angles and Explementary Angles Links',
            htmlDescription: 'Explanations, proofs, examples and questions about adjacent angles',
            fullTopic: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullTopic: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullTopic: false,
          },
        },
        quiz: {
          base: {
            type: 'singlePage',
            title: 'Complementary, Supplementary and Explementary Angles',
            description: 'Questions to identify and calculate complementary, supplementary and explementary angles',
            htmlTitle: 'Complementary, Supplementary and Explementary angles quiz',
            htmlDescription: 'Identify and calculate angles that are complementary, supplementary and explementary',
            fullTopic: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Complementary, Supplementary and Explementary Angles.',
            description: 'Summary of complementary, supplementary and explementary Angles.',
            htmlTitle: 'Complementary, supplementary and explementary angles summary',
            htmlDescription: 'Summary of complementary angles, supplementary angles and explementary angles',
            fullTopic: true,
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
      approaches: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Right Angle, Acute Angle, Obtuse Angle, Reflex Angle, Straight Angle, Full Angle',
            htmlDescription: 'Dynamic diagram that lets you explore the different types of important angles',
            fullTopic: true,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullTopic: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullTopic: false,
          },
        },
        quiz: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Quiz - set the angle to be either acute, right, obtuse, straight, reflex or full',
            htmlDescription: '',
            fullTopic: true,
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
      approaches: {
        discover: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Self discover the relationships between opposite angles, corresponding angles, alternate angles and interior angles',
            htmlDescription: 'Using parallel lines and supplementary angles, all these relationships can be proven',
            fullTopic: true,
          },
        },
        examples: {
          base: {
            type: 'singlePage',
            title: 'Examples of related angles',
            description: 'Examples of calculating opposite, corresponding, alternate and interior angles',
            htmlTitle: 'Opposite angles, corresponding angles, alternate angles and interior angles calculation examples',
            htmlDescription: 'Examples of finding angles in different geometries using the concepts of opposite, corresponding, alternate, interior and supplementary angles',
            fullTopic: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Opposite angles, corresponding angles, alternate angles and interior angles',
            htmlDescription: 'Introduction to opposite, corresponding, alternate and interior angles and their proofs',
            fullTopic: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to sources of information for opposite, corresponding, alternate and interior angles',
            htmlTitle: 'Opposite angles, corresponding angles, alternate angles and interior angles links',
            htmlDescription: 'Various external links covering definition and examples of opposite, corresponding, alternate and interior angles when two or three lines intersect',
            fullTopic: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullTopic: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullTopic: false,
          },
        },
        quiz: {
          base: {
            type: 'presentation',
            title: 'Simple geometries',
            description: '',
            htmlTitle: 'Quiz - Find the unknown angle in a system of opposite, corresponding, alternate and interior angles',
            htmlDescription: 'Dynamic quiz where no two questions are the same',
            fullTopic: true,
          },
          complex: {
            type: 'singlePage',
            title: 'More complex geometries',
            description: 'Find angles using opposite, corresponding, alternate, interior and supplementary angles',
            htmlTitle: 'Examples using opposite angles, corresponding angles, alternate angles, interior angles and supplementary angles',
            htmlDescription: 'Find angles using opposite, corresponding, alternate, interior and supplementary angles',
            fullTopic: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Summary of opposite, corresponding, adjacent and interior angles',
            htmlDescription: '',
            fullTopic: true,
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
      approaches: {
        examples: {
          base: {
            type: 'singlePage',
            title: 'Examples of area',
            description: '',
            htmlTitle: 'Area examples',
            htmlDescription: 'Calculation examples of areas for different shapes',
            fullTopic: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Introduction to area, rectangle area and square area',
            htmlDescription: 'Concept of area, why they it is measured in squares and why areas of rectangles and squares are what they are',
            fullTopic: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to Area',
            htmlTitle: 'Introduction to Area Links',
            htmlDescription: 'External links covering an introduction to area, and areas of rectangles and squares',
            fullTopic: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullTopic: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullTopic: false,
          },
        },
        quiz: {
          base: {
            type: 'presentation',
            title: 'Create an area',
            description: '',
            htmlTitle: 'Quiz: Create a rectangle or square with area',
            htmlDescription: 'Create a rectangle or square that has some defined area on this dynamic page',
            fullTopic: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Summary of area, rectangle area and square area.',
            htmlDescription: 'Summary of area concept, and equations for rectangle area and square area',
            fullTopic: true,
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
      approaches: {
        discover: {
          simple: {
            type: 'singlePage',
            title: 'Base',
            description: '',
            htmlTitle: 'Self discover what the area of a circle is',
            htmlDescription: 'Figure out why the area of a circle is what it is',
            fullTopic: true,
          },
        },
        examples: {
          base: {
            type: 'singlePage',
            title: 'Examples of Circle Area',
            description: '',
            htmlTitle: 'Circle area examples',
            htmlDescription: 'Examples of calculations involving circle area',
            fullTopic: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Intuitive derivation of circle area',
            htmlDescription: 'Find the equation for circle area using triangles',
            fullTopic: true,
          },
          static: {
            type: 'singlePage',
            title: 'Single Page Full explanation',
            description: '',
            htmlTitle: 'Intuitive derivation of circle area in a single page',
            htmlDescription: 'Using triangles, find the equation to area of a circle',
            fullTopic: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to sources of information for Circle Area',
            htmlTitle: 'Circle Area Links',
            htmlDescription: 'Links for circle area explanations, proofs and examples',
            fullTopic: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullTopic: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullTopic: false,
          },
        },
        quiz: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Quiz: Calculate the circle property',
            htmlDescription: 'Calculate circle property from either the radius, diameter, area or circumference',
            fullTopic: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Summary of Circle Area',
            htmlDescription: 'Area of a circle equation',
            fullTopic: true,
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
      approaches: {
        discover: {
          simple: {
            type: 'singlePage',
            title: 'Base',
            description: '',
            htmlTitle: 'Self discover what the area of a triangle is',
            htmlDescription: 'Figure out why the area of a triangle depends just on its base and height',
            fullTopic: true,
          },
        },
        examples: {
          base: {
            type: 'singlePage',
            title: 'Examples of ',
            description: '',
            htmlTitle: 'Triangle area examples',
            htmlDescription: 'Calculation examples using area of a triangle',
            fullTopic: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Triangle Area derivation and proof',
            htmlDescription: 'Explanation on why area of a triangle is what it is',
            fullTopic: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to sources of information for <TOPIC>',
            htmlTitle: 'Triangle area links',
            htmlDescription: 'Links to explanations, proofs, examples and questions about triangle area',
            fullTopic: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullTopic: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullTopic: false,
          },
        },
        quiz: {
          base: {
            type: 'presentation',
            title: 'Make triangle with target area',
            description: '',
            htmlTitle: 'Quiz - Create a triangle with a given area',
            htmlDescription: 'Drag the corners of a triangle to change its height and base to get the target area',
            fullTopic: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Area of a triangle',
            htmlDescription: 'Summary of triangle area',
            fullTopic: true,
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
      approaches: {
        examples: {
          static: {
            type: 'singlePage',
            title: 'Circle Radius, Diameter and Circumference',
            description: 'Examples calculations of diameter, radius and circumference',
            htmlTitle: 'Example calculations of radius, diameter and circumference',
            htmlDescription: 'Examples showing how to calculate radius, diameter and circumference of circles from known properties',
            fullTopic: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: 'Presentation form - interactive.',
            htmlTitle: 'Introduction to circles, their history and properties',
            htmlDescription: 'Introduction to circle, diameter, radius, circumference, center point. Relationships between radius, diameter and circumference.',
            fullTopic: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to information on circles',
            htmlTitle: 'Circles, circle properties and relationships links',
            htmlDescription: 'Explanations, proofs, examples and questions about Circles',
            fullTopic: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullTopic: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullTopic: false,
          },
        },
        quiz: {
          calcProperties: {
            type: 'singlePage',
            title: 'Calculate Properties',
            description: 'Calculate properties of a circle from other properties',
            htmlTitle: 'Calculate circle properties',
            htmlDescription: 'Calculate properties of a circle from other properties',
            fullTopic: true,
          },
          identifyProperties: {
            type: 'presentation',
            title: 'Identify Properties',
            description: 'Identify the properties of a circle.',
            htmlTitle: 'Quiz - Identify the circle property',
            htmlDescription: 'Given four different properties, click on the one that is requested',
            fullTopic: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Circle Properties',
            description: 'Presentation form - interactive.',
            htmlTitle: 'Properties of a circle summary',
            htmlDescription: 'Diameter, circumference, radius and center point, and the relationships between them',
            fullTopic: true,
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
      approaches: {
        discover: {
          simple: {
            type: 'singlePage',
            title: 'Base',
            description: '',
            htmlTitle: 'Self discover congruent triangles and how you can test if two triangles are the same',
            htmlDescription: 'Given the definition of congruent, you can work out the tests to tell if two triangles are congruent',
            fullTopic: true,
          },
        },
        examples: {
          base: {
            type: 'singlePage',
            title: 'Examples of finding and using Congruent Triangles',
            description: '',
            htmlTitle: 'Examples on how to find and use congruent triangles',
            htmlDescription: 'Examples showing how to identify congruent triangles, and then how to use the triangles to find unknown properties',
            fullTopic: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Congruent triangles and how to determine congruence',
            htmlDescription: 'Introduction to congruent triangles and intuitive reasoning behind the SAS, SSA, ASA, AAS, SSS, AAA congruence tests',
            fullTopic: true,
          },
          fromSAS: {
            type: 'singlePage',
            title: 'Show SSS, ASA and AAS from SAS',
            description: '',
            htmlTitle: 'Prove SSS, ASA and AAS from SAS',
            htmlDescription: 'Proofs for SSS, ASA and AAS triangle congruence from SAS',
            fullTopic: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to sources of information for congruent triangles',
            htmlTitle: 'Congruent triangles links',
            htmlDescription: 'Various external links covering definition and examples congruent triangles and how to test for them',
            fullTopic: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullTopic: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullTopic: false,
          },
        },
        quiz: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Quiz - Determine if two triangles are congruent',
            htmlDescription: 'Given three properties of two triangles, can you determine if they are congruent?',
            fullTopic: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Summary of congruent triangles and SAS, SSA, ASA, AAS, SSS, AAA',
            htmlDescription: 'Facts only summary of congruent triangles and congruent triangle tests',
            fullTopic: true,
          },
        },
        ta: {
          sss: {
            type: 'presentation',
            title: 'SSS',
            description: '',
            htmlTitle: 'Are triangles the same (congruent) if you have just three side lengths?',
            htmlDescription: 'Change side lengths and form triangles to see what is possible',
            fullTopic: false,
          },
          tri: {
            type: 'presentation',
            title: 'Triangle',
            description: 'Interactive triangle',
            htmlTitle: 'Interactive triangle to explore congruence possibilities',
            htmlDescription: 'Make different triangles to determine which set of properties is required to know if triangles are congruent',
            fullTopic: true,
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
      approaches: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Explanation on why we use degrees as a measure of angle',
            htmlDescription: 'How angle is measured, why use degrees and common angles in degrees',
            fullTopic: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to sources of information for Degrees',
            htmlTitle: 'Measuring angles in degrees links',
            htmlDescription: 'Explanations, and examples about measuring angles in degrees',
            fullTopic: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullTopic: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullTopic: false,
          },
        },
        quiz: {
          base: {
            type: 'singlePage',
            title: 'General Questions about Degrees',
            description: 'Answer general questions about measuring angle and degrees',
            htmlTitle: 'Quiz - Measuring angles and degrees',
            htmlDescription: 'Answer general questions about measuring angle and degrees',
            fullTopic: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Summary of using degrees to measure angle',
            htmlDescription: 'History of word, interactive diagram to see different angles in degrees',
            fullTopic: true,
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
      approaches: {
        discover: {
          simple: {
            type: 'singlePage',
            title: 'Base',
            description: '',
            htmlTitle: 'Self discover why an equilateral trianglehas equal angles',
            htmlDescription: 'Figure out why any equilateral triangle also have three equal angles',
            fullTopic: true,
          },
        },
        examples: {
          base: {
            type: 'singlePage',
            title: 'Isosceles Triangles',
            description: '',
            htmlTitle: 'Examples of using equilateral triangles',
            htmlDescription: 'Examples showing how how to use the properties of an equilateral triangle to solve different problems',
            fullTopic: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Equilateral triangle derivation from an isosceles triangle',
            htmlDescription: 'Use isosceles triangles to show the properties of an equilateral triangle, and the relationship of its angles',
            fullTopic: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to equilateral triangles',
            htmlTitle: 'Equilateral triangles links',
            htmlDescription: 'External sources of information about equilateral triangles',
            fullTopic: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullTopic: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullTopic: false,
          },
        },
        quiz: {
          base: {
            type: 'singlePage',
            title: 'Equilateral Quiz',
            description: '',
            htmlTitle: 'Equilateral triangles quiz',
            htmlDescription: 'Solve problems with equilateral triangles',
            fullTopic: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Equilateral triangle summary',
            htmlDescription: 'Interactive diagram showing properties of an equilateral triangle',
            fullTopic: true,
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
      approaches: {
        discover: {
          simple: {
            type: 'singlePage',
            title: 'Base',
            description: '',
            htmlTitle: 'Self discover the relationship between the external and internal angles of a triangle',
            htmlDescription: 'Using knowledge of total angle in a triangle, and supplementary angles you can find the relationship between a triangle\'s external angle and its two opposite internal angles',
            fullTopic: true,
          },
        },
        examples: {
          base: {
            type: 'singlePage',
            title: 'External angle calculations',
            description: '',
            htmlTitle: 'External angle calculation examples',
            htmlDescription: 'Examples of geometries where calculating the external angle of a triangle is needed',
            fullTopic: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'External angles (also called exterior angles) in a triangle explanation through presentation',
            htmlDescription: 'Proof of external angles in a triangle equalling sum of opposite internal angles',
            fullTopic: true,
          },
          simple: {
            type: 'singlePage',
            title: 'Full explanation in single page',
            description: '',
            htmlTitle: 'External angles (also called exterior angles)  in a triangle as a single page explanation',
            htmlDescription: 'Proof of external angles in a triangle equalling sum of opposite internal angles',
            fullTopic: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to sources of information for External Angles of Triangles',
            htmlTitle: 'Links for external angles of a triangle',
            htmlDescription: 'Links with explanations, examples and proofs for external angles of a triangle',
            fullTopic: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullTopic: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullTopic: false,
          },
        },
        quiz: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Quiz - find the external angle of a triangle',
            htmlDescription: 'Find the external angle (also called exterior angle) in a triangle quiz',
            fullTopic: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'External angle summary',
            description: '',
            htmlTitle: 'Summary of triangle external angle (or exterior angle)',
            htmlDescription: 'Interactive diagram showing and describing the external angle of a triangle',
            fullTopic: true,
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
      approaches: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Descriptive',
            description: 'Motivation to studying shapes.',
            htmlTitle: 'Why Study Shapes?',
            htmlDescription: 'Introduction to shapes, naming, history and why we should study them',
            fullTopic: true,
          },
          singlePage: {
            type: 'singlePage',
            title: 'Descriptive - Single Page',
            description: 'Motivation to studying shapes.',
            htmlTitle: 'Why Study Shapes?',
            htmlDescription: 'Introduction to shapes, naming, history and why we should study them',
            fullTopic: true,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullTopic: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullTopic: false,
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
      approaches: {
        discover: {
          simple: {
            type: 'singlePage',
            title: 'Base',
            description: '',
            htmlTitle: 'Self discover why an isosceles triangles can have two equal sides and angles',
            htmlDescription: 'Figure out why any triangle that has two equal sides also has two equal angles, and why any triangle with two equal angles has two equal sides',
            fullTopic: true,
          },
        },
        examples: {
          base: {
            type: 'singlePage',
            title: 'Isosceles Triangles',
            description: '',
            htmlTitle: 'Examples of using isosceles triangles',
            htmlDescription: 'Examples showing how how to use the properties of an isosceles triangle to solve different problems',
            fullTopic: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Isosceles triangles and proof',
            htmlDescription: 'Proof for if two sides are equal why two angles are equal and vise versa',
            fullTopic: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to isosceles triangles',
            htmlTitle: 'Isosceles triangles links',
            htmlDescription: 'External sources of information about isosceles triangles',
            fullTopic: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullTopic: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullTopic: false,
          },
        },
        quiz: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Quiz - Find the missing side or angle of an isosceles triangle',
            htmlDescription: 'Given a set of sides and angles, find the missing one',
            fullTopic: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Summary of Isosceles triangle and its properties',
            htmlDescription: 'Isosceles triangle, side and angle equality, split line properties',
            fullTopic: true,
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
      approaches: {
        discover: {
          simple: {
            type: 'singlePage',
            title: 'Base',
            description: '',
            htmlTitle: 'Self discover the properties of distance between parallel lines',
            htmlDescription: 'Figure out why the shortest distance between parallel lines is perpendicular and constant',
            fullTopic: true,
          },
        },
        examples: {
          base: {
            type: 'singlePage',
            title: 'Examples of ',
            description: '',
            htmlTitle: 'Parallel line distance examples',
            htmlDescription: 'Examples of problems where know the properties of parallel line distance is useful',
            fullTopic: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Introduction to the distance between parallel lines',
            htmlDescription: 'Investigate the property of distance between parallel lines',
            fullTopic: true,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullTopic: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullTopic: false,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Summary of parallel line distance property',
            htmlDescription: 'Parallel line distance is the length of the perpendicular line between them',
            fullTopic: true,
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
      approaches: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Interactive introduction to parallel lines',
            htmlDescription: 'See what parallel lines are, and when lines are parallel',
            fullTopic: true,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullTopic: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullTopic: false,
          },
        },
        quiz: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Quiz - Move lines to be parallel and find parallel lines',
            htmlDescription: 'Interactive quiz to make lines parallel, and find parallel lines in a selection of lines',
            fullTopic: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Introduction to parallel lines summary',
            htmlDescription: '',
            fullTopic: true,
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
      approaches: {
        discover: {
          simple: {
            type: 'singlePage',
            title: 'Base',
            description: '',
            htmlTitle: 'Self discover the properties of a triangle split with a parallel line',
            htmlDescription: 'Figure out why a triangle split with a parallel line will create a proportional triangle',
            fullTopic: true,
          },
        },
        examples: {
          base: {
            type: 'singlePage',
            title: 'Examples of triangles split with parallel lines',
            description: '',
            htmlTitle: 'Triangles split with parallel lines calculation examples',
            htmlDescription: 'Examples of triangle calculations where a triangle is split with a parallel line',
            fullTopic: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Descriptive',
            description: '',
            htmlTitle: 'Splitting a triangle with a parallel line',
            htmlDescription: 'Proof that splitting a triangle with a parallel line results in a similar triangle',
            fullTopic: true,
          },
          static: {
            type: 'singlePage',
            title: 'Full Proof',
            description: 'Proof showing the resulting triangle has proportional sides',
            htmlTitle: 'Similar Triangles Proof',
            htmlDescription: 'Proofs showing why equiangular triangles, and proportional triangles are similar',
            fullTopic: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to sources of information for Parallel Split of a Triangle',
            htmlTitle: 'Links: Parallel split of a triangle',
            htmlDescription: 'External links looking at triangle proportionality and parallel splits of a triangle.',
            fullTopic: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullTopic: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullTopic: false,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'External angle summary',
            description: '',
            htmlTitle: 'Splitting a triangle with a parallel line',
            htmlDescription: 'Summary showing splitting a triangle with a parallel line results in a similar triangle',
            fullTopic: true,
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
      approaches: {
        discover: {
          simple: {
            type: 'singlePage',
            title: 'Base',
            description: '',
            htmlTitle: 'Self discover the angle of the distance between a point and line',
            htmlDescription: 'Figure out why the shortest distance between a point and a line is perpendicular to the line',
            fullTopic: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Introduction to distance between a point and line',
            htmlDescription: 'Properties of distance between point and a line',
            fullTopic: true,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullTopic: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullTopic: false,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Summary of point line distance property',
            htmlDescription: '',
            fullTopic: true,
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
      approaches: {
        discover: {
          simple: {
            type: 'singlePage',
            title: 'Base',
            description: '',
            htmlTitle: 'Self discover the total internal angle of a quadrangle',
            htmlDescription: 'Figure out the total internal angle of a quadrangle or quadrilateral yourself',
            fullTopic: true,
          },
        },
        examples: {
          base: {
            type: 'singlePage',
            title: 'Quadrangle internal angle calculations',
            description: '',
            htmlTitle: 'Quadrangle or Quadrilateral interal angle calculation examples',
            htmlDescription: 'Examples of geometries where calculating the total internal angle of a quadrangle is needed',
            fullTopic: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Introduction to quadrangles and quadrilaterals',
            htmlDescription: 'Quadrangles, quadrilaterals and their properties',
            fullTopic: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to sources of information for quadrangles and quadrilaterals',
            htmlTitle: 'Links for quadrangles and quadrilaterals',
            htmlDescription: 'Links with explanations, examples and proofs quadrangles and quadrilaterals',
            fullTopic: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullTopic: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullTopic: false,
          },
        },
        quiz: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Quiz - Find the unknown angle in the quadrangle',
            htmlDescription: 'Dynamic quiz where no two questions are the same',
            fullTopic: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Quadrangles (quadrilaterals) summary',
            htmlDescription: '',
            fullTopic: true,
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
      approaches: {
        examples: {
          static: {
            type: 'singlePage',
            title: 'Example problems using Radians',
            description: 'Use radians to calculate radius, angle and arc length',
            htmlTitle: 'Calculating radius, arc length and angle using radians',
            htmlDescription: 'Example problems showing how to use radians to calculate radius, arc length and angle when given two other circle properties',
            fullTopic: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Introduction to radians and why we use them',
            htmlDescription: 'Radians and their relationship with arc length and radius',
            fullTopic: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to information on radians',
            htmlTitle: 'Links introducing radians',
            htmlDescription: 'Explanations, proofs, examples and questions about radians',
            fullTopic: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullTopic: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullTopic: false,
          },
        },
        quiz: {
          base: {
            type: 'presentation',
            title: 'Change Circle to Match',
            description: '',
            htmlTitle: 'Quiz: Find the arc or angle that matches the target',
            htmlDescription: 'Interactive quiz where you can change the diagram to find the target angle or arc length',
            fullTopic: true,
          },
          calc: {
            type: 'singlePage',
            title: 'Calculate Properties with Radians',
            description: 'Calculate properties of a circle from other properties using radians',
            htmlTitle: 'Calculate circle properties using radians',
            htmlDescription: 'Calculate properties of a circle from other properties using radians',
            fullTopic: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Summary of what radians are and their relationship to radius and arc length',
            htmlDescription: '',
            fullTopic: true,
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
      approaches: {
        discover: {
          simple: {
            type: 'singlePage',
            title: 'Base',
            description: '',
            htmlTitle: 'Self discover why a rectangles opposite sides are equal and parallel',
            htmlDescription: 'Figure out why a rectangle has opposite sides that are equal and parallel',
            fullTopic: true,
          },
        },
        examples: {
          base: {
            type: 'singlePage',
            title: 'Rectangle calculation examples',
            description: '',
            htmlTitle: 'Examples of using rectangle properties',
            htmlDescription: 'Examples showing how to use the properties of a rectangle to examine geometries',
            fullTopic: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Introduction to rectangles and squares and derivation of their properties',
            htmlDescription: 'Proof showing why a rectangles opposite sides are equal and parallel',
            fullTopic: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to introductions to rectangles and squares',
            htmlTitle: 'Rectangle and square introduction links',
            htmlDescription: 'External links covering an introduction to rectangles and squares',
            fullTopic: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullTopic: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullTopic: false,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Summary of rectangle and square properties',
            htmlDescription: '',
            fullTopic: true,
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
      approaches: {
        discover: {
          simple: {
            type: 'singlePage',
            title: 'Base',
            description: '',
            htmlTitle: 'Self discover the properties of a right angle triangle',
            htmlDescription: 'Figure out why the hypotenuse is the longest side and find the pythagoean theorem',
            fullTopic: true,
          },
        },
        examples: {
          base: {
            type: 'singlePage',
            title: 'Examples of Right Angle Triangle calculations',
            description: '',
            htmlTitle: 'Right Angle Triangle example calculations',
            htmlDescription: 'Examples showing how to use the properties of right angle triangles to solve various problems',
            fullTopic: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: 'Properties of right angle triangles, and the Pythagorean theorem.',
            htmlTitle: 'Right angle triangle introduction and pythagoean theorem proof',
            htmlDescription: 'Right angle triangle introduction, hypotenuse, area and pythagorean theorem derivation.',
            fullTopic: true,
          },
          pythagorus_proof: {
            type: 'singlePage',
            title: 'Derivation of Pythagorean Theorem',
            description: 'Derivation using area of four right angle triangles',
            htmlTitle: 'Pythagorean Theorem Derivation',
            htmlDescription: 'Derivation using area of four right angle triangles',
            fullTopic: false,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to sources of information for Right Angle Triangles',
            htmlTitle: 'Links for Right Angle Triangles',
            htmlDescription: 'External explanations of right angle triangles',
            fullTopic: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullTopic: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullTopic: false,
          },
        },
        quiz: {
          base: {
            type: 'presentation',
            title: 'Find the Unknown Angle',
            description: '',
            htmlTitle: 'Quiz - Find the unknown angle, side or area in a right angle triangle.',
            htmlDescription: 'Dynamic quiz where no two questions are the same',
            fullTopic: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Properties',
            description: '',
            htmlTitle: 'Right Angle Triangle Summary',
            htmlDescription: 'Right angle triangle definition including hypotenuse, area and pythagorean theorem.',
            fullTopic: true,
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
      approaches: {
        discover: {
          simple: {
            type: 'singlePage',
            title: 'Base',
            description: '',
            htmlTitle: 'Self discover why longer sides are opposite larger angles in a triangle',
            htmlDescription: 'Figure out why the length of a triangle\'s side depends on the size of the oppostite angle',
            fullTopic: true,
          },
        },
        examples: {
          base: {
            type: 'singlePage',
            title: 'Examples of triangle side angle relationships',
            description: '',
            htmlTitle: 'Triangle side angle relationship examples',
            htmlDescription: 'Use the relationships between a triangles side and angle to solve different geometries',
            fullTopic: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Introduction to relationship between triangle side length and angle',
            htmlDescription: 'Proof of why larger angles are opposite longer sides in a triangle',
            fullTopic: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to triangle side angle relationships',
            htmlTitle: 'Triangle side angle relationship links',
            htmlDescription: 'External links covering the relationship between the size of angles and length of sides in a triangle',
            fullTopic: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullTopic: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullTopic: false,
          },
        },
        quiz: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Quiz - Find the largest or smallest side or angle',
            htmlDescription: 'Dynamic quiz where no two questions are the same',
            fullTopic: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Summary of relationship between side and angle in a triangle',
            htmlDescription: '',
            fullTopic: true,
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
      approaches: {
        explanation: {
          equilangularIsSimilarProof: {
            type: 'singlePage',
            title: 'Equilangular Triangles are Similar - Proof 2',
            description: 'Proof showing why equiangular triangles are proportional triangles and therefore similar',
            htmlTitle: 'Equilangular Triangles are Similar Proof',
            htmlDescription: 'Proof showing why equiangular triangles are proportional triangles and therefore similar',
            fullTopic: false,
          },
          equilangularProofBrief: {
            type: 'singlePage',
            title: 'Equilangular Triangles are Similar - Proof 2 (Brief)',
            description: 'Succinct proof showing why equiangular triangles, are proportional triangles and therefore similar',
            htmlTitle: 'Triangles with equal angles are similar proof',
            htmlDescription: 'Succinct proof showing why equiangular triangles, are proportional triangles and therefore similar',
            fullTopic: false,
          },
          static: {
            type: 'singlePage',
            title: 'Descriptive',
            description: 'Proofs showing why equiangular triangles, and proportional triangles are similar',
            htmlTitle: 'Similar Triangles Proof',
            htmlDescription: 'Proofs showing why equiangular triangles, and proportional triangles are similar',
            fullTopic: true,
          },
          staticBrief: {
            type: 'singlePage',
            title: 'In Brief',
            description: 'Succinct proofs showing why equiangular triangles, and proportional triangles are similar',
            htmlTitle: 'Similar Triangles Proof',
            htmlDescription: 'Proofs showing why equiangular triangles, and proportional triangles are similar',
            fullTopic: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External Links',
            description: 'External links to sources of information for Similar Triangles',
            htmlTitle: 'Similar Triangles Links',
            htmlDescription: 'Explanations, proofs, examples and questions about Similar Triangles>',
            fullTopic: false,
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
      approaches: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: '',
            htmlDescription: '',
            fullTopic: true,
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
      approaches: {
        discover: {
          base: {
            type: 'presentation',
            title: 'Interactive',
            description: '',
            htmlTitle: 'Self discover what a triangle is, the types of triangle and the relationship between angles.',
            htmlDescription: 'Stand together with the great mathematicians and scientists by discovering the relationship between angles of a triangle yourself',
            fullTopic: true,
          },
        },
        examples: {
          base: {
            type: 'singlePage',
            title: 'Triangle Angles',
            description: 'Example calculations of angles in a triangle',
            htmlTitle: 'Example calculations of angles in a triangle',
            htmlDescription: 'Calculating angles in various geometries using sum of angles in a triangle',
            fullTopic: true,
          },
        },
        explanation: {
          base: {
            type: 'presentation',
            title: 'Full explanation',
            description: '',
            htmlTitle: 'Introduction to triangles and their properties',
            htmlDescription: 'Proof that triangle total angle equals 180º',
            fullTopic: true,
          },
        },
        links: {
          base: {
            type: 'generic',
            title: 'External',
            description: 'External links to sources of information for Triangles>',
            htmlTitle: 'Triangles Links',
            htmlDescription: 'Explanations, proofs, examples and questions about Triangles',
            fullTopic: false,
          },
        },
        dev: {
          base: {
            type: 'presentation',
            title: 'base',
            description: '',
            fullTopic: false,
          },
          staticTest: {
            type: 'presentation',
            title: 'staticTest',
            description: '',
            fullTopic: false,
          },
        },
        quiz: {
          base: {
            type: 'presentation',
            title: 'Total Angle',
            description: '',
            htmlTitle: 'Quiz - Find the unknown angle in the triangle',
            htmlDescription: 'Dynamic quiz where no two questions are the same',
            fullTopic: true,
          },
          types: {
            type: 'presentation',
            title: 'Triangle Types',
            description: '',
            htmlTitle: 'Quiz - Create a triangle of given type',
            htmlDescription: 'Create an acute triangle, right angle triangle, obtuse triangle, equilateral triangle, isosceles triangle or scalene triangle',
            fullTopic: true,
          },
        },
        summary: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: 'Summary of triangles and their properties',
            htmlDescription: '',
            fullTopic: true,
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
      approaches: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: '',
            htmlDescription: '',
            fullTopic: true,
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
      approaches: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: '',
            htmlDescription: '',
            fullTopic: true,
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
      approaches: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: '',
            htmlDescription: '',
            fullTopic: true,
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
      approaches: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: '',
            htmlDescription: '',
            fullTopic: true,
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
      approaches: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: '',
            htmlDescription: '',
            fullTopic: true,
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
      approaches: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: '',
            htmlDescription: '',
            fullTopic: true,
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
      approaches: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: '',
            htmlDescription: '',
            fullTopic: true,
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
      approaches: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: '',
            htmlDescription: '',
            fullTopic: true,
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
      approaches: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: '',
            htmlDescription: '',
            fullTopic: true,
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
      approaches: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: '',
            htmlDescription: '',
            fullTopic: true,
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
      approaches: {
        explanation: {
          base: {
            type: 'presentation',
            title: 'Base',
            description: '',
            htmlTitle: '',
            htmlDescription: '',
            fullTopic: true,
          },
        },
      },
      dependencies: [
      ],
      enabled: false,
    },
  };
}
