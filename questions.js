var order = [
  'home',
  'plant',
  'pattern',
  'career',
  'phenomena',
  'crowd',
  'worst',
  'election',
  'poo',
  'game',
  'cookie',
  'mannequin',
  'fruit',
  'bugs',
  'code',
  'social',
  'spirit',
  'staircase',
  'hack',
  'riot',
  'tourism',
  'steve',
  'celebs',
  'protest',
];

var questions = {
  'steve' : {
    'question': 'how do you want to be remembered?',
    'answers' : {
      'a' : {
        'content': 'steve5.jpg',
        'points' : {
          'default'  : 0,
          'red' : 1,
          'sharp' : 2,
        },
      },
      'b' : {
        'content': 'steve8.png',
        'points' : {
          'default' : 0,
          'yellow'  : 1,
        },
      },
      'c' : {
        'content': 'steve3.jpg',
        'points' : {
          'default' : 0,
          'black' : 1,
          'red' : 1,
          'sharp' : 1,
        },
      },
      'd' : {
        'content': 'steve12.jpg',
        'points' : {
          'default' : 0,
          'blue' : 1,
        },
      },
    },
  },
  'bugs' : {
    'question': 'which outfit would you wear?',
    'answers' : {
      'a' : {
        'content': 'bug14.jpg',
        'points' : {
          'default' : 0,
          'white' : 1,
        },
      },
      'b' : {
        'content': 'bug15.jpg',
        'points' : {
          'default' : 0,
          'red' : 1,
        },
      },
      'c' : {
        'content': 'bug18.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'd' : {
        'content': 'bug3.jpg',
        'points' : {
          'default' : 0,
        },
      },
    },
  },
  'tourism' : {
    'question': 'which experience will clear your mind?',
    'answers' : {
      'a' : {
        'content': 'free4.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'b' : {
        'content': 'free1.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'c' : {
        'content': 'free2.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'd' : {
        'content': 'free5.jpg',
        'points' : {
          'default' : 0,
        },
      },
    },
  },
  'protest' : {
    // 'question': 'what is your current outlook on the future?',
    'question': 'how do you feel about the shape of things?',
    'answers' : {
      'a' : {
        'content': 'protest1.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'b' : {
        'content': 'protest6.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'c' : {
        'content': 'protest4.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'd' : {
        'content': 'protest7.jpg',
        'points' : {
          'default' : 0,
        },
      },
    },
  },
  'cookie' : {
    // 'question': 'which candidate should lead the nation?',
    // 'question': 'which candidate are you in love with?',
    'question': 'who are you in love with?',
    'answers' : {
      'a' : {
        'content': 'cookie1.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'b' : {
        'content': 'cookie5.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'c' : {
        'content': 'cookie3.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'd' : {
        'content': 'cookie4.jpg',
        'points' : {
          'default' : 0,
          'yellow' : 1,
        },
      },
    },
  },
  'fruit' : {
    'question': 'which one actually tastes like fruit?',
    'answers' : {
      'a' : {
        'content': 'fruit11.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'b' : {
        'content': 'fruit2.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'c' : {
        'content': 'fruit14.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'd' : {
        'content': 'fruit13.jpg',
        'points' : {
          'default' : 0,
        },
      },
    },
  },
  'worst' : {
    // 'question': 'what is the worst?',
    'question': 'how has your day been so far?',
    'answers' : {
      'a' : {
        'content': 'worst1.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'b' : {
        'content': 'worst2.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'c' : {
        'content': 'worst5.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'd' : {
        'content': 'worst.jpg',
        'points' : {
          'default' : 0,
        },
      },
    },
  },
  'hack' : {
    'question': 'which lifehack is most useful to you?',
    'answers' : {
      'a' : {
        'content': 'lifehack3.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'b' : {
        'content': 'lifehack1.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'c' : {
        'content': 'lifehack5.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'd' : {
        'content': 'lifehack6.jpg',
        'points' : {
          'default' : 0,
        },
      },
    },
  },
  'poo' : {
    'question': 'which neighbor do you try to avoid?',
    'answers' : {
      'a' : {
        'content': 'poo1.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'b' : {
        'content': 'poo2.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'c' : {
        'content': 'poo3.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'd' : {
        'content': 'poo4.jpg',
        'points' : {
          'default' : 0,
        },
      },
    },
  },
  'celebs' : {
    // 'question': 'who do you believe is still alive, out there in the universe, making humanity great again?',
    'question': 'who do you believe is secretly still around, making humanity great again?',
    'answers' : {
      'a' : {
        'content': 'celeb8.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'b' : {
        'content': 'celeb10.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'c' : {
        'content': 'celeb9.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'd' : {
        'content': 'celeb11.jpg',
        'points' : {
          'default' : 0,
        },
      },
    },
  },
  'crowd' : {
    'question': 'what is your kind of crowd?',
    'answers' : {
      'a' : {
        'content': 'crowd5.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'b' : {
        'content': 'crowd9.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'c' : {
        'content': 'crowd10.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'd' : {
        'content': 'crowd8.jpg',
        'points' : {
          'default' : 0,
        },
      },
    },
  },
  'riot' : {
    'question': 'in which cultural event would you most likely participate?',
    'answers' : {
      'a' : {
        'content': 'riot5.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'b' : {
        'content': 'riot4.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'c' : {
        'content': 'protest9.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'd' : {
        'content': 'riot6.jpg',
        'points' : {
          'default' : 0,
        },
      },
    },
  },
  'election' : {
    'question': 'where were you on election night?',
    'answers' : {
      'a' : {
        'content': 'election1.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'b' : {
        'content': 'election2.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'c' : {
        'content': 'election3.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'd' : {
        'content': 'election4.jpg',
        'points' : {
          'default' : 0,
        },
      },
    },
  },
  'game' : {
    // 'question': 'which game show attracts the most annoying contestants?',
    'question': 'which game show is most annoying?',
    'answers' : {
      'a' : {
        'content': 'game1.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'b' : {
        'content': 'game5.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'c' : {
        'content': 'game2.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'd' : {
        'content': 'game4.jpg',
        'points' : {
          'default' : 0,
        },
      },
    },
  },
  'career' : {
    'question': 'what do you want to be when you grow up?',
    'answers' : {
      'a' : {
        'content': 'career8.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'b' : {
        'content': 'career5.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'c' : {
        'content': 'career11.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'd' : {
        'content': 'career10.jpg',
        'points' : {
          'default' : 0,
        },
      },
    },
  },
  'home' : {
    'question': 'choose your new home:',
    'answers' : {
      'a' : {
        'content': 'home1.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'b' : {
        'content': 'home2.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'c' : {
        'content': 'home3.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'd' : {
        'content': 'home4.jpg',
        'points' : {
          'default' : 0,

        },
      },
    },
  },
  'mannequin' : {
    'question': 'How did you feel the day after the election?',
    // 'question': 'How do you feel about the shape of things',
    'answers' : {
      'a' : {
        'content': 'mannequin.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'b' : {
        'content': 'mannequin5.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'c' : {
        'content': 'mannequin3.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'd' : {
        'content': 'mannequin4.jpg',
        'points' : {
          'default' : 0,
        },
      },
    },
  },
  'pattern' : {
    'question': 'Pick a pattern.',
    'answers' : {
      'a' : {
        'content': 'pattern1.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'b' : {
        'content': 'pattern2.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'c' : {
        'content': 'pattern3.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'd' : {
        'content': 'pattern4.jpg',
        'points' : {
          'default' : 0,
        },
      },
    },
  },
  'phenomena' : {
    'question': 'Which phenomena do you want to experience?',
    'answers' : {
      'a' : {
        'content': 'phenomena6.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'b' : {
        'content': 'phenomena2.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'c' : {
        'content': 'phenomena3.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'd' : {
        'content': 'phenomena7.jpg',
        'points' : {
          'default' : 0,
        },
      },
    },
  },
  'plant' : {
    'question': 'Pick a house plant.',
    'answers' : {
      'a' : {
        'content': 'plant1.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'b' : {
        'content': 'plant2.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'c' : {
        'content': 'plant3.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'd' : {
        'content': 'plant4.jpg',
        'points' : {
          'default' : 0,
        },
      },
    },
  },
  'staircase' : {
    'question': 'which staircase leads to the afterlife?',
    'answers' : {
      'a' : {
        'content': 'staircase1.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'b' : {
        'content': 'staircase2.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'c' : {
        'content': 'staircase3.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'd' : {
        'content': 'staircase4.jpg',
        'points' : {
          'default' : 0,
        },
      },
    },
  },
  'code' : {
    'question': 'which language do you want to learn?',
    'answers' : {
      'a' : {
        'content': 'code3.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'b' : {
        'content': 'code2.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'c' : {
        'content': 'code4.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'd' : {
        'content': 'code1.jpg',
        'points' : {
          'default' : 0,
        },
      },
    },
  },
  'spirit' : {
    'question': 'which is your spirit animal?',
    'answers' : {
      'a' : {
        'content': 'animal1.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'b' : {
        'content': 'animal2.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'c' : {
        'content': 'animal3.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'd' : {
        'content': 'animal4.jpg',
        'points' : {
          'default' : 0,
        },
      },
    },
  },
  'social' : {
    'question': 'describe your presence on social media',
    'answers' : {
      'a' : {
        'content': 'social6.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'b' : {
        'content': 'social7.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'c' : {
        'content': 'social3.jpg',
        'points' : {
          'default' : 0,
        },
      },
      'd' : {
        'content': 'social1.jpg',
        'points' : {
          'default' : 0,
        },
      },
    },
  },
}
