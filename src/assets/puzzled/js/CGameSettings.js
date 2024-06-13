function CGameSettings(){
    var _aMatSize;
    var _aPieces;
    var _aPieceJoint;

    this._init = function(){
        _aMatSize = new Array();
        _aMatSize["num_"+DIFFICULTY[0]] =  {rows:4,cols:4};
        _aMatSize["num_"+DIFFICULTY[1]] =  {rows:6,cols:6};
        _aMatSize["num_"+DIFFICULTY[2]] =  {rows:8,cols:8};

        //SET PIECE SIZE
        _aPieces = new Array();
        _aPieces["difficulty_"+DIFFICULTY[0]] = new Array();
        _aPieces["difficulty_"+DIFFICULTY[1]] = new Array();
        _aPieces["difficulty_"+DIFFICULTY[2]] = new Array();

        _aPieces["difficulty_"+DIFFICULTY[0]][0] = [0,0,212,279];
        _aPieces["difficulty_"+DIFFICULTY[0]][1] = [146,0,334,212];
        _aPieces["difficulty_"+DIFFICULTY[0]][2] = [412,0,220,272];
        _aPieces["difficulty_"+DIFFICULTY[0]][3] = [567,0,273,212];
        _aPieces["difficulty_"+DIFFICULTY[0]][4] = [0,205,277,216];
        _aPieces["difficulty_"+DIFFICULTY[0]][5] = [209,152,213,333];
        _aPieces["difficulty_"+DIFFICULTY[0]][6] = [356,208,341,214];
        _aPieces["difficulty_"+DIFFICULTY[0]][7] = [628,144,212,341];
        _aPieces["difficulty_"+DIFFICULTY[0]][8] = [0,353,215,340];
        _aPieces["difficulty_"+DIFFICULTY[0]][9] = [146,411,339,219];
        _aPieces["difficulty_"+DIFFICULTY[0]][10] = [412,347,220,346];
        _aPieces["difficulty_"+DIFFICULTY[0]][11] = [565,418,275,216];
        _aPieces["difficulty_"+DIFFICULTY[0]][12] = [0,628,276,212];
        _aPieces["difficulty_"+DIFFICULTY[0]][13] = [209,570,215,270];
        _aPieces["difficulty_"+DIFFICULTY[0]][14] = [353,626,342,214];
        _aPieces["difficulty_"+DIFFICULTY[0]][15] = [628,566,212,274];

        _aPieces["difficulty_"+DIFFICULTY[1]][0] = [0,0,143,187];
        _aPieces["difficulty_"+DIFFICULTY[1]][1] = [98,0,225,142];
        _aPieces["difficulty_"+DIFFICULTY[1]][2] = [277,0,149,182];
        _aPieces["difficulty_"+DIFFICULTY[1]][3] = [383,0,234,142];
        _aPieces["difficulty_"+DIFFICULTY[1]][4] = [564,0,144,184];
        _aPieces["difficulty_"+DIFFICULTY[1]][5] = [657,0,183,142];
        _aPieces["difficulty_"+DIFFICULTY[1]][6] = [0,137,187,145];
        _aPieces["difficulty_"+DIFFICULTY[1]][7] = [140,102,144,222];
        _aPieces["difficulty_"+DIFFICULTY[1]][8] = [239,139,231,143];
        _aPieces["difficulty_"+DIFFICULTY[1]][9] = [420,96,145,228];
        _aPieces["difficulty_"+DIFFICULTY[1]][10] = [514,139,230,144];
        _aPieces["difficulty_"+DIFFICULTY[1]][11] = [703,97,137,223];
        _aPieces["difficulty_"+DIFFICULTY[1]][12] = [0,236,145,227];
        _aPieces["difficulty_"+DIFFICULTY[1]][13] = [98,274,228,147];
        _aPieces["difficulty_"+DIFFICULTY[1]][14] = [276,231,149,233];
        _aPieces["difficulty_"+DIFFICULTY[1]][15] = [380,279,237,145];
        _aPieces["difficulty_"+DIFFICULTY[1]][16] = [565,235,142,229];
        _aPieces["difficulty_"+DIFFICULTY[1]][17] = [662,274,178,151];
        _aPieces["difficulty_"+DIFFICULTY[1]][18] = [0,419,186,142];
        _aPieces["difficulty_"+DIFFICULTY[1]][19] = [140,380,145,218];
        _aPieces["difficulty_"+DIFFICULTY[1]][20] = [237,417,230,144];
        _aPieces["difficulty_"+DIFFICULTY[1]][21] = [420,377,146,234];
        _aPieces["difficulty_"+DIFFICULTY[1]][22] = [516,419,236,143];
        _aPieces["difficulty_"+DIFFICULTY[1]][23] = [703,378,137,224];
        _aPieces["difficulty_"+DIFFICULTY[1]][24] = [0,506,143,241];
        _aPieces["difficulty_"+DIFFICULTY[1]][25] = [98,558,225,144];
        _aPieces["difficulty_"+DIFFICULTY[1]][26] = [276,509,149,233];
        _aPieces["difficulty_"+DIFFICULTY[1]][27] = [381,559,240,142];
        _aPieces["difficulty_"+DIFFICULTY[1]][28] = [564,528,143,214];
        _aPieces["difficulty_"+DIFFICULTY[1]][29] = [661,559,179,143];
        _aPieces["difficulty_"+DIFFICULTY[1]][30] = [0,697,187,143];
        _aPieces["difficulty_"+DIFFICULTY[1]][31] = [141,662,143,178];
        _aPieces["difficulty_"+DIFFICULTY[1]][32] = [239,699,231,141];
        _aPieces["difficulty_"+DIFFICULTY[1]][33] = [420,656,143,184];
        _aPieces["difficulty_"+DIFFICULTY[1]][34] = [517,699,231,141];
        _aPieces["difficulty_"+DIFFICULTY[1]][35] = [704,655,136,185];

        _aPieces["difficulty_"+DIFFICULTY[2]][0] = [0,0,107,141];
        _aPieces["difficulty_"+DIFFICULTY[2]][1] = [73,0,168,107];
        _aPieces["difficulty_"+DIFFICULTY[2]][2] = [206,0,111,137];
        _aPieces["difficulty_"+DIFFICULTY[2]][3] = [284,0,175,106];
        _aPieces["difficulty_"+DIFFICULTY[2]][4] = [419,0,108,138];
        _aPieces["difficulty_"+DIFFICULTY[2]][5] = [489,0,175,106];
        _aPieces["difficulty_"+DIFFICULTY[2]][6] = [628,0,108,137];
        _aPieces["difficulty_"+DIFFICULTY[2]][7] = [701,0,139,106];
        _aPieces["difficulty_"+DIFFICULTY[2]][8] = [0,103,139,108];
        _aPieces["difficulty_"+DIFFICULTY[2]][9] = [104,76,108,166];
        _aPieces["difficulty_"+DIFFICULTY[2]][10] = [178,103,171,108];
        _aPieces["difficulty_"+DIFFICULTY[2]][11] = [314,72,108,170];
        _aPieces["difficulty_"+DIFFICULTY[2]][12] = [382,104,173,108];
        _aPieces["difficulty_"+DIFFICULTY[2]][13] = [524,73,107,167];
        _aPieces["difficulty_"+DIFFICULTY[2]][14] = [595,103,177,110];
        _aPieces["difficulty_"+DIFFICULTY[2]][15] = [734,67,106,173];
        _aPieces["difficulty_"+DIFFICULTY[2]][16] = [0,176,108,172];
        _aPieces["difficulty_"+DIFFICULTY[2]][17] = [73,205,171,111];
        _aPieces["difficulty_"+DIFFICULTY[2]][18] = [206,173,111,174];
        _aPieces["difficulty_"+DIFFICULTY[2]][19] = [283,208,176,110];
        _aPieces["difficulty_"+DIFFICULTY[2]][20] = [420,176,106,172];
        _aPieces["difficulty_"+DIFFICULTY[2]][21] = [493,206,171,112];
        _aPieces["difficulty_"+DIFFICULTY[2]][22] = [629,176,108,172];
        _aPieces["difficulty_"+DIFFICULTY[2]][23] = [699,206,141,111];
        _aPieces["difficulty_"+DIFFICULTY[2]][24] = [0,314,139,108];
        _aPieces["difficulty_"+DIFFICULTY[2]][25] = [105,285,108,165];
        _aPieces["difficulty_"+DIFFICULTY[2]][26] = [176,312,172,110];
        _aPieces["difficulty_"+DIFFICULTY[2]][27] = [314,283,108,176];
        _aPieces["difficulty_"+DIFFICULTY[2]][28] = [383,315,177,107];
        _aPieces["difficulty_"+DIFFICULTY[2]][29] = [524,284,107,169];
        _aPieces["difficulty_"+DIFFICULTY[2]][30] = [607,314,161,109];
        _aPieces["difficulty_"+DIFFICULTY[2]][31] = [734,284,106,168];
        _aPieces["difficulty_"+DIFFICULTY[2]][32] = [0,381,108,180];
        _aPieces["difficulty_"+DIFFICULTY[2]][33] = [74,420,166,107];
        _aPieces["difficulty_"+DIFFICULTY[2]][34] = [206,383,111,174];
        _aPieces["difficulty_"+DIFFICULTY[2]][35] = [284,420,178,106];
        _aPieces["difficulty_"+DIFFICULTY[2]][36] = [419,398,108,159];
        _aPieces["difficulty_"+DIFFICULTY[2]][37] = [492,420,172,107];
        _aPieces["difficulty_"+DIFFICULTY[2]][38] = [628,393,110,165];
        _aPieces["difficulty_"+DIFFICULTY[2]][39] = [696,420,144,107];
        _aPieces["difficulty_"+DIFFICULTY[2]][40] = [0,524,141,108];
        _aPieces["difficulty_"+DIFFICULTY[2]][41] = [105,497,107,166];
        _aPieces["difficulty_"+DIFFICULTY[2]][42] = [178,524,171,108];
        _aPieces["difficulty_"+DIFFICULTY[2]][43] = [314,492,108,171];
        _aPieces["difficulty_"+DIFFICULTY[2]][44] = [385,524,172,111];
        _aPieces["difficulty_"+DIFFICULTY[2]][45] = [524,492,108,171];
        _aPieces["difficulty_"+DIFFICULTY[2]][46] = [594,524,181,111];
        _aPieces["difficulty_"+DIFFICULTY[2]][47] = [735,493,105,172];
        _aPieces["difficulty_"+DIFFICULTY[2]][48] = [0,598,108,171];
        _aPieces["difficulty_"+DIFFICULTY[2]][49] = [73,626,171,112];
        _aPieces["difficulty_"+DIFFICULTY[2]][50] = [206,594,111,178];
        _aPieces["difficulty_"+DIFFICULTY[2]][51] = [283,629,174,108];
        _aPieces["difficulty_"+DIFFICULTY[2]][52] = [419,601,108,168];
        _aPieces["difficulty_"+DIFFICULTY[2]][53] = [496,630,167,107];
        _aPieces["difficulty_"+DIFFICULTY[2]][54] = [626,598,112,168];
        _aPieces["difficulty_"+DIFFICULTY[2]][55] = [696,629,144,108];
        _aPieces["difficulty_"+DIFFICULTY[2]][56] = [0,735,139,105];
        _aPieces["difficulty_"+DIFFICULTY[2]][57] = [105,703,108,137];
        _aPieces["difficulty_"+DIFFICULTY[2]][58] = [177,734,171,106];
        _aPieces["difficulty_"+DIFFICULTY[2]][59] = [314,703,108,137];
        _aPieces["difficulty_"+DIFFICULTY[2]][60] = [385,734,175,106];
        _aPieces["difficulty_"+DIFFICULTY[2]][61] = [523,709,109,131];
        _aPieces["difficulty_"+DIFFICULTY[2]][62] = [597,734,173,106];
        _aPieces["difficulty_"+DIFFICULTY[2]][63] = [735,698,105,142];





        //SET PIECE JOINTS
        _aPieceJoint = new Array();
        _aPieceJoint["difficulty_"+DIFFICULTY[0]] = new Array();
        _aPieceJoint["difficulty_"+DIFFICULTY[1]] = new Array();
        _aPieceJoint["difficulty_"+DIFFICULTY[2]] = new Array();
        _aPieceJoint["difficulty_"+DIFFICULTY[3]] = new Array();

        _aPieceJoint["difficulty_"+DIFFICULTY[0]][0] = {up:null,right:[180,105],down:[87,242],left:null};
        _aPieceJoint["difficulty_"+DIFFICULTY[0]][1] = {up:null,right:[303,106],down:[164,177],left:[32,106]};
        _aPieceJoint["difficulty_"+DIFFICULTY[0]][2] = {up:null,right:[186,115],down:[101,239],left:[35,103]};
        _aPieceJoint["difficulty_"+DIFFICULTY[0]][3] = {up:null,right:null,down:[190,176],left:[30,116]};
        _aPieceJoint["difficulty_"+DIFFICULTY[0]][4] = {up:[86,41],right:[245,118],down:[104,179],left:null};
        _aPieceJoint["difficulty_"+DIFFICULTY[0]][5] = {up:[100,28],right:[179,148],down:[94,300],left:[35,170]};
        _aPieceJoint["difficulty_"+DIFFICULTY[0]][6] = {up:[156,35],right:[307,107],down:[181,172],left:[34,91]};
        _aPieceJoint["difficulty_"+DIFFICULTY[0]][7] = {up:[128,34],right:null,down:[92,306],left:[32,170]};
        _aPieceJoint["difficulty_"+DIFFICULTY[0]][8] = {up:[100,33],right:[179,170],down:[91,310],left:null};
        _aPieceJoint["difficulty_"+DIFFICULTY[0]][9] = {up:[160,39],right:[305,112],down:[181,185],left:[34,112]};
        _aPieceJoint["difficulty_"+DIFFICULTY[0]][10] = {up:[122,32],right:[186,187],down:[114,311],left:[39,175]};
        _aPieceJoint["difficulty_"+DIFFICULTY[0]][11] = {up:[154,32],right:null,down:[181,178],left:[32,116]};
        _aPieceJoint["difficulty_"+DIFFICULTY[0]][12] = {up:[89,33],right:[241,118],down:null,left:null};
        _aPieceJoint["difficulty_"+DIFFICULTY[0]][13] = {up:[116,27],right:[179,150],down:null,left:[33,173]};
        _aPieceJoint["difficulty_"+DIFFICULTY[0]][14] = {up:[171,36],right:[309,107],down:null,left:[36,97]};
        _aPieceJoint["difficulty_"+DIFFICULTY[0]][15] = {up:[118,33],right:null,down:null,left:[31,169]};

        _aPieceJoint["difficulty_"+DIFFICULTY[1]][0] = {up:null,right:[120,71],down:[59,162],left:null};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][1] = {up:null,right:[203,71],down:[110,123],left:[23,70]};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][2] = {up:null,right:[128,78],down:[66,161],left:[27,68]};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][3] = {up:null,right:[209,62],down:[125,119],left:[20,77]};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][4] = {up:null,right:[120,57],down:[64,162],left:[27,61]};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][5] = {up:null,right:null,down:[119,119],left:[25,57]};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][6] = {up:[59,25],right:[165,79],down:[71,121],left:null};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][7] = {up:[68,20],right:[122,97],down:[64,197],left:[24,114]};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][8] = {up:[107,22],right:[207,71],down:[124,115],left:[22,60]};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][9] = {up:[87,23],right:[119,114],down:[63,204],left:[22,114]};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][10] = {up:[115,22],right:[210,76],down:[129,119],left:[25,70]};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][11] = {up:[72,22],right:null,down:[75,200],left:[22,121]};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][12] = {up:[70,22],right:[124,114],down:[60,203],left:null};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][13] = {up:[110,25],right:[204,73],down:[121,124],left:[23,74]};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][14] = {up:[83,24],right:[128,126],down:[76,207],left:[28,116]};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][15] = {up:[105,25],right:[211,75],down:[125,120],left:[22,76]};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][16] = {up:[78,22],right:[119,105],down:[71,205],left:[28,121]};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][17] = {up:[113,25],right:null,down:[105,125],left:[23,66]};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][18] = {up:[61,23],right:[163,79],down:[69,112],left:null};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][19] = {up:[75,22],right:[124,100],down:[72,195],left:[22,116]};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][20] = {up:[115,25],right:[208,72],down:[119,117],left:[24,64]};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][21] = {up:[81,24],right:[119,117],down:[76,206],left:[23,109]};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][22] = {up:[120,24],right:[212,82],down:[125,126],left:[25,73]};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][23] = {up:[64,21],right:null,down:[68,200],left:[24,120]};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][24] = {up:[69,26],right:[121,120],down:[56,214],left:null};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][25] = {up:[112,24],right:[202,72],down:[112,122],left:[22,71]};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][26] = {up:[77,24],right:[128,127],down:[66,211],left:[26,117]};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][27] = {up:[119,27],right:[215,60],down:[129,115],left:[22,78]};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][28] = {up:[74,18],right:[120,86],down:[82,190],left:[31,92]};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][29] = {up:[110,19],right:null,down:[117,120],left:[24,55]};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][30] = {up:[59,27],right:[164,80],down:null,left:null};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][31] = {up:[70,20],right:[121,98],down:null,left:[23,115]};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][32] = {up:[106,22],right:[208,70],down:null,left:[22,60]};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][33] = {up:[87,22],right:[119,106],down:null,left:[22,113]};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][34] = {up:[127,22],right:[209,80],down:null,left:[23,62]};
        _aPieceJoint["difficulty_"+DIFFICULTY[1]][35] = {up:[72,22],right:null,down:null,left:[22,121]};


        _aPieceJoint["difficulty_"+DIFFICULTY[2]][0] = {up:null,right:[89,51],down:[45,121],left:null};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][1] = {up:null,right:[151,53],down:[84,90],left:[19,53]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][2] = {up:null,right:[95,57],down:[53,118],left:[18,53]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][3] = {up:null,right:[156,44],down:[96,89],left:[16,58]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][4] = {up:null,right:[89,42],down:[48,120],left:[21,44]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][5] = {up:null,right:[159,56],down:[87,89],left:[21,41]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][6] = {up:null,right:[88,50],down:[49,117],left:[18,57]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][7] = {up:null,right:null,down:[81,84],left:[18,52]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][8] = {up:[44,20],right:[121,58],down:[53,89],left:null};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][9] = {up:[51,15],right:[91,73],down:[49,147],left:[18,85]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][10] = {up:[80,18],right:[154,54],down:[90,87],left:[17,45]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][11] = {up:[65,18],right:[85,84],down:[47,154],left:[18,85]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][12] = {up:[86,18],right:[157,58],down:[97,89],left:[18,51]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][13] = {up:[53,16],right:[87,77],down:[53,148],left:[16,90]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][14] = {up:[82,19],right:[158,48],down:[93,92],left:[16,48]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][15] = {up:[47,17],right:null,down:[53,155],left:[20,83]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][16] = {up:[52,18],right:[90,86],down:[44,153],left:null};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][17] = {up:[80,21],right:[153,56],down:[90,95],left:[18,56]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][18] = {up:[61,19],right:[94,94],down:[57,156],left:[20,88]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][19] = {up:[78,17],right:[158,57],down:[93,91],left:[18,59]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][20] = {up:[59,19],right:[90,80],down:[53,152],left:[22,90]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][21] = {up:[84,18],right:[155,64],down:[79,94],left:[17,50]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][22] = {up:[59,19],right:[89,80],down:[54,153],left:[17,93]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][23] = {up:[87,18],right:null,down:[82,94],left:[20,50]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][24] = {up:[44,18],right:[123,60],down:[50,87],left:null};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][25] = {up:[58,15],right:[91,76],down:[54,150],left:[16,87]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][26] = {up:[86,16],right:[156,55],down:[87,90],left:[20,48]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][27] = {up:[61,16],right:[89,88],down:[58,155],left:[17,83]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][28] = {up:[90,18],right:[159,59],down:[92,93],left:[17,56]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][29] = {up:[48,16],right:[96,89],down:[48,152],left:[17,90]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][30] = {up:[78,16],right:[146,44],down:[76,92],left:[14,59]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][31] = {up:[50,16],right:null,down:[55,150],left:[18,74]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][32] = {up:[54,17],right:[91,90],down:[42,161],left:null};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][33] = {up:[83,18],right:[150,53],down:[83,90],left:[17,53]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][34] = {up:[58,17],right:[96,96],down:[52,156],left:[18,88]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][35] = {up:[89,19],right:[158,45],down:[96,88],left:[17,59]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][36] = {up:[56,11],right:[91,62],down:[62,142],left:[23,66]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][37] = {up:[82,18],right:[155,59],down:[86,89],left:[19,41]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][38] = {up:[55,14],right:[87,78],down:[64,145],left:[20,84]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][39] = {up:[92,18],right:null,down:[92,92],left:[19,52]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][40] = {up:[45,19],right:[125,58],down:[52,91],left:null};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][41] = {up:[51,13],right:[90,70],down:[48,146],left:[18,85]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][42] = {up:[82,17],right:[154,54],down:[89,86],left:[20,45]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][43] = {up:[66,18],right:[90,78],down:[46,154],left:[17,85]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][44] = {up:[95,16],right:[155,58],down:[88,92],left:[20,47]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][45] = {up:[54,18],right:[89,80],down:[45,153],left:[19,90]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][46] = {up: [96,16],right:[162,56],down:[90,92],left:[18,47]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][47] = {up:[52,17],right:null,down:[45,152],left:[22,86]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][48] = {up:[52,18],right:[91,85],down:[44,153],left:null};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][49] = {up:[80,22],right:[154,56],down:[85,94],left:[18,56]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][50] = {up:[63,19],right:[96,94],down:[58,162],left:[19,89]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][51] = {up:[78,16],right:[156,50],down:[87,88],left:[16,59]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][52] = {up:[54,17],right:[93,84],down:[54,150],left:[20,78]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][53] = {up:[73,19],right:[150,58],down:[83,92],left:[17,55]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][54] = {up:[56,20],right:[92,81],down:[63,150],left:[20,90]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][55] = {up:[87,21],right:null,down:[96,85],left:[21,50]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][56] = {up:[45,16],right:[122,58],down:null,left:null};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][57] = {up:[52,18],right:[91,78],down:null,left:[16,88]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][58] = {up:[88,23],right:[154,53],down:null,left:[18,46]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][59] = {up:[54,18],right:[89,79],down:null,left:[16,83]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][60] = {up:[87,18],right:[157,63],down:null,left:[18,41]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][61] = {up:[59,13],right:[91,77],down:null,left:[19,87]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][62] = {up:[91,18],right:[158,61],down:null,left:[18,53]};
        _aPieceJoint["difficulty_"+DIFFICULTY[2]][63] = {up:[56,18],right:null,down:null,left:[17,98]};

    
    };

    this.getPieces = function(iNumPieces){
        return _aPieces["difficulty_"+iNumPieces];
    };

    this.getPieceJoints = function(iNumPieces){
        return _aPieceJoint["difficulty_"+iNumPieces];
    };

    this.getPieceSize = function(iNumPieces){
        return _aMatSize["num_"+iNumPieces];
    };

    this._init();
}
