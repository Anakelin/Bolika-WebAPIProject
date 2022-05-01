function getUser() {
    //controlla che sia decente
    var name = prompt("Welcome. Please write your name ");
    return name;
}

const setChars = async () => {
  var list = await fetch('HTTP://localhost:5113/api/Bolika').then(result => result.json());

  /*
  spritesheet.style = 'background : url(\'./img/Characters/Cataphract/spritesheet.png\')';
  spritesheet2.style = 'background : url(\'./img/Characters/Cataphract/spritesheet.png\')';
  */ 

  spritesheet.style = 'background-image: url('+list[0]['character']['charImg'].replace(/\\/gi,'\\\\')+');';
  spritesheet2.style = 'background-image: url('+list[4]['character']['charImg'].replace(/\\/gi,'\\\\')+');'; 
};

const setCharsReverse = async () => {
  var list = await fetch('HTTP://localhost:5113/api/Bolika').then(result => result.json());

  spritesheet.style = 'background-image: url('+list[4]['character']['charImg'].replace(/\\/gi,'\\\\')+');';
  spritesheet2.style = 'background-image: url('+list[0]['character']['charImg'].replace(/\\/gi,'\\\\')+');';
};

const getList = async (firstchar) => {
    if(firstchar)
    {
        const result = await fetch('HTTP://localhost:5113/api/Bolika/1').then(result => result.json());
        return result;
    }
    else{
        const result = await fetch('HTTP://localhost:5113/api/Bolika/2').then(result => result.json());
        return result;
    }
  };

  const setIcons = async (firstchar) => {
    var list = await getList(firstchar);

      for (let i = 0; i < list.length; i++) {
        var skill = document.getElementById('icon'+(i+1));       
        console.log(list)
        skill.style=  'background-image: url(\''+list[i]['skill']['img'].replace(/\\/gi,'\\\\')+'\');'
      }
};
  const getSkills = async (firstchar) => {
  var list = await getList(firstchar);
  var text =  [];  
  for (let i = 0; i < list.length; i++) {
    
    var name = list[i]['skill']['name'];
    var cst = list[i]['skill']['cst'];
    var dmg = list[i]['skill']['dmg'];
    var desc = list[i]['skill']['desc'];
    text.push({name,dmg,cst,desc});
    }
    return text;
}

const setDescriptions = async (firstchar,nummove) => {
  var list = await getSkills(firstchar);
  var title = document.getElementById('desctitle');
      //var stats = document.getElementById('descstat');
      var damage = document.getElementById('descdmg');
      var cost = document.getElementById('desccst');
      var desc = document.getElementById('desc');
  title.innerHTML = list[nummove]['name'];
  damage.innerHTML = list[nummove]['dmg'];
  cost.innerHTML = list[nummove]['cst'];
  desc.innerHTML = list[nummove]['desc'];
};


const getMove = async (firstchar,nummove) => {
  var list = await getSkills(firstchar);
  var dmg = list[nummove]['dmg'];
  var cost = list[nummove]['cst']
  var skill = [];
   skill.push({dmg,cost});
  return skill;
};




/*.\img\theknight_spritesheet.png*/
/*
  (async () => {
    const list1 = await getList(true);
    const list2 = await getList(false);

    console.log(list1);
    console.log(list2);

    var char1 = document.getElementById('a');
    var char2 = document.getElementById('b');
    char1.style= 'background-image: url(\''+list1[0]['character']['charImg'].replace(/\\/gi,'\\\\').replace(/\\/gi,'\\\\')+'\');';
    char2.style= 'background-image: url(\''+list2[0]['character']['charImg'].replace(/\\/gi,'\\\\').replace(/\\/gi,'\\\\')+'\');';

  })();
  */