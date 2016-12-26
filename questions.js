var order = [
  // 'steve','bugs','cookie'
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
    'question': 'what is your current outlook on the future?',
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
    'question': 'which candidate should lead the nation?',
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
    'question': 'what is the worst?',
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
        'content': 'worst3.jpg',
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
    'question': 'who do you believe is still alive, out there in the universe, making humanity great again?',
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
        'content': 'celeb6.jpg',
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
    'question': 'in which cultural event would you participate?',
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
        'content': 'riot2.jpg',
        'points' : {
            'default' : 0,
        },
      },
    },
  },
}
