// preguntas

const preguntas = [{
    number: 1,
    text: "I ______ bus on Mondays.",
    options: ["a. 'm going to work with", "b.'m going to work by", "c. go to work with", "d. go to work by"],
    answer: "d. go to work by",
    ok: false,
    score: 1,
},
{
    number: 2,
    text: "Sorry, but this chair is ______.",
    options: ["a.me", "b.mine", "c.my", "d.our"],
    answer: "b.mine",
    ok: false,
    score: 1,
},
{
    number: 3,
    text: "A: 'How old ______?'   B: 'I ______ .'",
    options: ["a. are you / am 20 years old.", "b. have you / have 20 years old", "c. are you / am 20 years.", "d. do you have / have 20 years"],
    answer: "a. are you / am 20 years old.",
    ok: false,
    score: 1,
},
{
    number: 4,
    text: "I ______ to the cinema.",
    options: ["a. not usually go", "b. don't usually go", "c. don't go usually", "d. do not go usually"],
    answer: "b. don't usually go",
    ok: false,
    score: 1,
},
{
    number: 5,
    text: "Where ______ ?",
    options: ["a. your sister works", "b. your sister work", "c. does your sister work", "d. do your sister work"],
    answer: "c. does your sister work",
},
{
    number: 6,
    text: "The test is ______ February.",
    options: ["a. in", "b. at", "c. on", "d. over"],
    answer: "a. in",
    ok: false,
    score: 1,
},
{
    number: 7,
    text: "I eat pasta ______ week.",
    options: ["a. twice in a", "b. twice a", "c. one time a", "d. once in a"],
    answer: "b. twice a",
    ok: false,
    score: 1,
},
{
    number: 8,
    text: "I don't have ______ free time.",
    options: ["a. many", "b. any", "c. a lot", "d. some"],
    answer: "b. any",
    ok: false,
    score: 1,
},
{
    number: 9,
    text: "A: '_____ to the cinema tomorrow?'",
    options: ["a. We will go", "b. Do we go", "c. We go", "d. Shall we go"],
    answer: "d. Shall we go",
    ok: false,
    score: 1,
},
{
    number: 10,
    text: "We went to the market ______ some vegetables.",
    options: ["a. to buy", "b. for buy", "c. for to buy", "d. for buying"],
    answer: "a. to buy",
    ok: false,
    score: 1,
},
{
    number: 11,
    text: "Sorry, but when you called I ______ a shower.",
    options: ["a. had", "b. did have", "c. was having", "d. were having"],
    answer: "c. was having",
    ok: false,
    score: 1,
},
{
    number: 12,
    text: "______ are very friendly and very intelligent.",
    options: ["a. Dolphins", "b. The dolphins", "c. A dolphin", "d. The dolphin"],
    answer: "a. Dolphins",
    ok: false,
    score: 1,
},
{
    number: 13,
    text: "Somebody stole ______ yesterday.",
    options: ["a. the car of my mother", "b. my car mother", "c. my mother's car", "d. my mother car"],
    answer: "c. my mother's car",
    ok: false,
    score: 1,
},
{
    number: 14,
    text: "______ with me?",
    options: ["a. Do you like to dance", "b. Would you like to dance", "c. Do you like dance", "d. Would you like dancing"],
    answer: "b. Would you like to dance",
    ok: false,
    score: 1,
},
{
    number: 15,
    text: "She is ______ her sister, I think.",
    options: ["a. more happier than", "b. more happy that", "c. happier that", "d. happier than"],
    answer: "d. happier than",
    ok: false,
    score: 1,
},
{
    number: 16,
    text: "I couldn't eat ______ before the exam.",
    options: ["a. nothing", "b. anything", "c. everything", "d. something"],
    answer: "b. anything",
    ok: false,
    score: 1,
},
{
    number: 17,
    text: "Please, pass me the remote. ______ TV.",
    options: ["a. I'm watching", "b. I will watch", "c. I'm going to watch", "d. I might watch"],
    answer: "c. I'm going to watch",
    ok: false,
    score: 1,
},
{
    number: 18,
    text: "I'll call you when I ______ home.",
    options: ["a. arrive", "b. 'm going to arrive", "c. will arrive", "d. arrived"],
    answer: "a. arrive",
    ok: false,
    score: 1,
},
{
    number: 19,
    text: "______ Japan?",
    options: ["a. Have you ever gone in", "b. Do you have been in", "c. Have you ever been to", "d. Have you ever been into"],
    answer: "c. Have you ever been to",
    ok: false,
    score: 1,
},
{
    number: 20,
    text: "He drives very ______.",
    options: ["a. slow", "b. slower", "c. more slowly", "d. slowly"],
    answer: "d. slowly",
    ok: false,
    score: 1,
},
{
    number: 21,
    text: "Can you ______ the lights? I can't see.",
    options: ["a. open", "b. turn on", "c. start", "d. put on"],
    answer: "b. turn on",
    ok: false,
    score: 1,
},
{
    number: 22,
    text: "We couldn't find a taxi, ______ we walked home.",
    options: ["a. so", "b. because", "c. but", "d. although"],
    answer: "a. so",
    ok: false,
    score: 1,
},
{
    number: 23,
    text: "Tomorrow I ______ get up early; it's my day off.",
    options: ["a. mustn't", "b. must", "c. haven't to", "d. don't have to"],
    answer: "d. don't have to",
    ok: false,
    score: 1,
},
{
    number: 24,
    text: "I ______ this coffee. It tastes horrible.",
    options: ["a. am not like", "b. don't like", "c. 'm not liking", "d. not like"],
    answer: "b. don't like",
    ok: false,
    score: 1,
},
{
    number: 25,
    text: "We ______ yesterday.",
    options: ["a. arrived", "b. did arrive", "c. have arrive", "d. have arrived"],
    answer: "a. arrived",
    ok: false,
    score: 1,
},
{
    number: 26,
    text: "When I arrive home, I'm going to have a ______ bath.",
    options: ["a. relaxing", "b. relaxed", "c. relax", "d. relaxation"],
    answer: "a. relaxing",
    ok: false,
    score: 1,
},
{
    number: 27,
    text: "A: 'We don't have any milk.'   B: 'Really? I ______ more.'",
    options: ["a. 'm going to buy", "b.'ll buy", "c. 'm buying", "d. buy"],
    answer: "b.'ll buy",
    ok: false,
    score: 1,
},
{
    number: 28,
    text: "We ______ to seeing you next Thursday.",
    options: ["a. really want", "b. hope", "c. are looking forward", "d. really wish"],
    answer: "c. are looking forward",
    ok: false,
    score: 1,
},
{
    number: 29,
    text: "I'd like to go ______ in the park.",
    options: ["a. to walking", "b. for walk", "c. for a walk", "d. to walk"],
    answer: "c. for a walk",
    ok: false,
    score: 1,
},
{
    number: 30,
    text: "German ______ in Germany, Austria and Switzerland.",
    options: ["a. is spoken", "b. spoken", "c. speaks", "d. is speak"],
    answer: "a. is spoken",
    ok: false,
    score: 1,
},
{
    number: 31,
    text: "I ______ your book. It's fantastic. I'll finish it tonight.",
    options: ["a. 've been reading", "b. read", "c. 've read", "d. 'm read"],
    answer: "a. 've been reading",
    ok: false,
    score: 1,
},
{
    number: 32,
    text: "He went on a business _____ to New York.",
    options: ["a. travel", "b. journey", "c. commute", "d. trip"],
    answer: "d. trip",
    ok: false,
    score: 1,
},
{
    number: 33,
    text: "If I tell you a secret, ______ anyone?",
    options: ["a. are you tell", "b. do you tell", "c. will you tell", "d. are you telling"],
    answer: "c. will you tell",
    ok: false,
    score: 1,
},
{
    number: 34,
    text: "My brother and I don't ______ very well.",
    options: ["a. get off", "b. get on", "c. go on", "d. break off"],
    answer: "b. get on",
    ok: false,
    score: 1,
},
{
    number: 35,
    text: "I ______ fifty pages, but I have to read fifty more.",
    options: ["a. 've been reading", "b. was reading", "c. 've reading", "d. 've read"],
    answer: "d. 've read",
    ok: false,
    score: 1,
},
{
    number: 36,
    text: "If I ______ you, I wouldn't do it.",
    options: ["a. was", "b. were", "c. would be", "d. am"],
    answer: "b. were",
    ok: false,
    score: 1,
},
{
    number: 37,
    text: "This painting ______ a fortune.",
    options: ["a. is worth", "b. is value", "c. values", "d. worths"],
    answer: "a. is worth",
    ok: false,
    score: 1,
},
{
    number: 38,
    text: "She is the same age ______ me.",
    options: ["a. than", "b. that", "c. what", "d. as"],
    answer: "d. as",
    ok: false,
    score: 1,
},
{
    number: 39,
    text: "It's obvious that you...",
    options: ["a. don't drive as faster as me.", "b. drive faster than me.", "c. drive more fast than I.", "d. drive no faster than I."],
    answer: "b. drive faster than me.",
    ok: false,
    score: 1,
},
{
    number: 40,
    text: "The boat sank, but they ______ swim to the shore.",
    options: ["a. could", "b. were able to", "c. can", "d. abled to"],
    answer: "b. were able to",
    ok: false,
    score: 1,
},
{
    number: 41,
    text: "If I had known that she was there, I ______  hello.",
    options: ["a. would say", "b. said", "c. had said", "d. would have said"],
    answer: "d. would have said",
    ok: false,
    score: 1,
},
{
    number: 42,
    text: "I think he ______ in prison for what he did.",
    options: ["a. should put", "b. could been put", "c. should be put", "d. could put"],
    answer: "c. should be put",
    ok: false,
    score: 1,
},
{
    number: 43,
    text: "He ______ him with his homework.",
    options: ["a. told me to help", "b. said me that I help", "c. said me I help", "d. told me that I help"],
    answer: "a. told me to help",
    ok: false,
    score: 1,
},
{
    number: 44,
    text: "We ______. We hired a very good interior designer.",
    options: ["a. redecorated the kitchen", "b. had redecorated the kitchen", "c. got redecorated the kitchen", "d. had the kitchen redecorated"],
    answer: "d. had the kitchen redecorated",
    ok: false,
    score: 1,
},
{
    number: 45,
    text: "A: 'I had a sauna yesterday'   B: '___ ? That's great.'",
    options: ["a. Did you", "b. You did", "c. Had you", "d. Didn't you"],
    answer: "a. Did you",
    ok: false,
    score: 1,
},
{
    number: 46,
    text: "I wonder ______ at the party.",
    options: ["a. who was she talking", "b. who she was talking to", "c. who was she talking to", "d. who she was talking"],
    answer: "c. who was she talking to",
    ok: false,
    score: 1,
},
{
    number: 47,
    text: "Which is correct?",
    options: ["a. How older people are, wiser they become", "b. If older people are, wiser they become", "c. The more old the people, the more wise", "d. The older people are, the wiser they become"],
    answer: "d. The older people are, the wiser they become",
    ok: false,
    score: 1,
},
{
    number: 48,
    text: "I bought a ______ jacket.",
    options: ["a. nice red leather", "b. leather nice red", "c. red nice leather", "d. red leather nice"],
    answer: "a. nice red leather",
    ok: false,
    score: 1,
},
{
    number: 49,
    text: "By 2025 we ______ the cure for type 1 diabetes.",
    options: ["a. will be discovering", "b. are discovering", "c. are going to be discovering", "d. will have discovered"],
    answer: "d. will have discovered",
    ok: false,
    score: 1,
},
{
    number: 50,
    text: "The building ______.",
    options: ["a. was damaged badly in the hurricane last year", "b. was badly damaged last year in the hurricane", "c. was badly damaged in the hurricane last year", "d. last year was damaged badly in the hurricane"],
    answer: "c. was badly damaged in the hurricane last year",
    ok: false,
    score: 1,
},
{
    number: 51,
    text: "If only he ______ doing that. It's so annoying!",
    options: ["a. had stopped", "b. would stop", "c. would have stopped", "d. stopped"],
    answer: "b. would stop",
    ok: false,
    score: 1,
},
{
    number: 52,
    text: "If my parents hadn't met, I ______ here now.",
    options: ["a. wouldn't be", "b. wouldn't have been", "c. hadn't been", "d. weren't"],
    answer: "a. wouldn't be",
    ok: false,
    score: 1,
},
{
    number: 53,
    text: "I like the job, but I think it'll be difficult to ______ nights.",
    options: ["a. be used to working", "b. uses to work", "c. get used to working", "d. get used to work"],
    answer: "c. get used to working",
    ok: false,
    score: 1,
},
{
    number: 54,
    text: "You ______ me immediately. Now it's too late.",
    options: ["a. had told", "b. would have told", "c. should tell", "d. should have told"],
    answer: "d. should have told",
    ok: false,
    score: 1,
},
{
    number: 55,
    text: "Not only ______ you, but he also lied to you.",
    options: ["a. did he disrespect", "b. he disrespected", "c. he did disrespect", "d. he has disrespected"],
    answer: "a. did he disrespect",
    ok: false,
    score: 1,
},
{
    number: 56,
    text: "______ should be angry, not you.",
    options: ["a. It's me who", "b. It's I", "c. Who", "d. There's me who"],
    answer: "a. It's me who",
    ok: false,
    score: 1,
},
{
    number: 57,
    text: "I ______ you, but I forgot.",
    options: ["a. would tell", "b. was telling", "c. will tell", "d. was going to tell"],
    answer: "d. was going to tell",
    ok: false,
    score: 1,
},
{
    number: 58,
    text: "It's ______ to Paris.",
    options: ["a. a two hours journey", "b. two hours' journey", "c. a two hour's journey", "d. a two-hours journey"],
    answer: "d. a two-hours journey",
    ok: false,
    score: 1,
},
{
    number: 59,
    text: "They _____ to arrive next Friday.",
    options: ["a. are set", "b. are on the verge", "c. are due", "d. are on the brink"],
    answer: "c. are due",
    ok: false,
    score: 1,
},
{
    number: 60,
    text: "I didn't want to do it in the past, but now I ______.",
    options: ["a. would want", "b. 'm wanting to", "c. want", "d. want to"],
    answer: "d. want to",
    ok: false,
    score: 1,
},


]