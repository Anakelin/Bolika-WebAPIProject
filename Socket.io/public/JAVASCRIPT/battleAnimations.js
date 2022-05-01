
      function playLu(mainplayer)
      {
        var sprite;
        var spriteE;
        var cha;
        var chaE;
        if(mainplayer)
        {
          sprite = spritesheet;
          spriteE=spritesheet2;
          cha = char;
          chaE = char2;
        }
        else{
          sprite = spritesheet2;
          spriteE=spritesheet;
          cha = char2;
          chaE = char;
        }
        sprite.classList.remove('activeAnimation');
        sprite.classList.add('activeSpearAnimation')
        sprite.style = 'background : url(\'./img/Characters/Cataphract/skill_1_spritesheet.png\'); width: 10560px; height:199spx;';
        cha.style='width: 320px;height: 199px;';
        //spritesheet.style='display: none'
        var anima = cha.animate({
          transform: ['translate3d(60px, 0, 0)', 'translate3d(55px, 10px, 0)', 'translate3d(320px, 5px, 0)', 'translate3d(0px, 0, 0)'],
          easing: ['ease-in', 'ease-out'],
        }, 900);
        setTimeout(function(){
          playDe(chaE,spriteE);
        },500)
        
        setTimeout(function(){
          sprite.classList.remove('pauseAnimation');
          sprite.classList.remove('activeSpearAnimation')
          sprite.classList.add('activeAnimation');
          cha.style='width: 249px;height: 203px;';
          sprite.style = 'background : url(\'./img/Characters/Cataphract/spritesheet.png\'); display:block';
        },1000);
        
      }
      
      function playBo(mainplayer)
      {
        var sprite;
        var spriteE;
        var cha;
        var chaE;
        var arrowflip = document.createElement('div');
        var arrowbox = document.createElement('div');
        var arrow = document.createElement('div');

        if(mainplayer)
        {
          sprite = spritesheet;
          spriteE=spritesheet2;
          cha = char;
          chaE = char2;
          arrowflip.id = 'arrowflip';
        }
        else{
          sprite = spritesheet2;
          spriteE=spritesheet;
          cha = char2;
          chaE = char;
          arrowflip.id = 'arrownoflip';
        }

        arrow.style= 'background : url(\'./img/Characters/Cataphract/arrow.png\'); width: 7953px; height:83px; right:0px';
        arrowbox.id = 'arrowbox';
        arrow.id = 'arrow';
        //document.body.insertBefore(arrowflip,document.getElementById('battle'))
        //char.appendChild(arrowflip);
        var battle = document.getElementById('battleside')
        battle.appendChild(arrowflip);
        arrowflip.appendChild(arrowbox);
        arrowbox.appendChild(arrow);

        cha.style = 'background : url(\'./img/Characters/Cataphract/skill_2.png\'); width: 152px; height:232px;';
        sprite.style='display: none'
        var anima = cha.animate({
          transform: ['translate3d(40px,-35px, 0)','translate3d(40px,-35px, 0)','translate3d(40px,-35px, 0)','translate3d(40px,-35px, 0)'],
          easing: ['ease-in', 'ease-out'],
        }, 1000);

        if(mainplayer)
        {
          var animaArrow = arrowbox.animate({
            transform: ['translate3d(-100px, 200px, 0)', 'translate3d(-400px, 230px, 0)','translate3d(-400px, 230px, 0)','translate3d(-400px, 230px, 0)','translate3d(-400px, 230px, 0)'],
            easing: ['ease-in'],
          }, 1000);  
        }
        else{
          var animaArrow = arrowbox.animate({
            // transform: ['translate3d(-100px, 30px, 0)', 'translate3d(-400px, 55px, 0)','translate3d(-400px, 55px, 0)','translate3d(-400px, 55px, 0)','translate3d(-400px, 55px, 0)'],
            transform: ['translate3d(400px, 200px, 0)','translate3d(60px, 230px, 0)','translate3d(60px, 230px, 0)','translate3d(60px, 230px, 0)','translate3d(60px, 230px, 0)'],
            easing: ['ease-in'],
          }, 1000);
        }
        
        setTimeout(function(){
          playDe(chaE,spriteE);
        },300)
        setTimeout(function(){
          sprite.classList.remove('pauseAnimation');
          arrowflip.remove();
          arrowbox.remove();
          arrow.remove();
          cha.style='width: 249px;height: 203px;';
          sprite.style = 'background : url(\'./img/Characters/Cataphract/spritesheet.png\'); display:block';
        },1000); 
      }

      function playDe(cha,sprite){
        cha.style = 'background : url(\'./img/Characters/Cataphract/defend.png\'); width: 191px; height:204px;';
        sprite.style='display: none'
        var anima = cha.animate({
          transform: ['translate3d(-40px, 0px, 0)','translate3d(-55px, 0px, 0)','translate3d(-40px, 0px, 0)'],
          easing: ['ease-in', 'ease-out'],
        }, 1000);
        setTimeout(function(){
          sprite.classList.remove('pauseAnimation');
          cha.style='width: 249px;height: 203px;';
          sprite.style = 'background : url(\'./img/Characters/Cataphract/spritesheet.png\'); display:block';
        },1000);
      }

      function playCh(mainplayer){
        var sprite;
        var spriteE;
        var cha;
        var chaE;
        if(mainplayer)
        {
          sprite = spritesheet;
          spriteE=spritesheet2;
          cha = char;
          chaE = char2;
        }
        else{
          sprite = spritesheet2;
          spriteE=spritesheet;
          cha = char2;
          chaE = char;
        }
        sprite.classList.remove('activeAnimation');
        sprite.classList.add('activeHorseAnimation1')
        
        sprite.style = 'background : url(\'./img/Characters/Cataphract/skill_3a_spritesheet.png\'); width: 11946px; height:302px;';
        cha.style='width: 362px;height: 302px;';
        var anima = cha.animate({
          transform: ['translate3d(-100px, -100px, 0)','translate3d(-100px, -100px, 0)','translate3d(-100px, -100px, 0)','scaleX(-1) translate3d(-100px, -100px, 0)'],
          opacity: [1,1,1,0],
          easing: ['ease-in', 'ease-out'],
        }, 1000);
        setTimeout(
          function(){
            sprite.style = 'background : url(\'./img/Characters/Cataphract/skill_3b_spritesheet.png\'); width: 10659px; height:226px;';
            cha.style='width: 323px;height: 226px;';
            sprite.classList.remove('activeHorseAnimation1')
            sprite.classList.add('activeHorseAnimation2')
            var anima = cha.animate({
              transform: ['translate3d(60px, -50px, 0)', 'translate3d(55px, -50px, 0)', 'translate3d(320px, -50px, 0)', 'translate3d(0px, -50px, 0)'],
              easing: ['ease-in', 'ease-out'],
            }, 1000);
            setTimeout(function(){
              playDe(chaE,spriteE);
            },300)
            setTimeout(function(){
              sprite.classList.remove('activeHorseAnimation2');
              sprite.classList.add('activeAnimation');
              cha.style='width: 249px;height: 203px;';
              sprite.style = 'background : url(\'./img/Characters/Cataphract/spritesheet.png\'); display:block';
            },1000);   
          },1000
        )
      }

      function playBn(mainplayer){
        var sprite;
        var spriteE;
        var cha;
        var chaE;
        var healbox = document.createElement('div');
        var heal = document.createElement('div');

        if(mainplayer)
        {
          sprite = spritesheet;
          spriteE=spritesheet2;
          cha = char;
          chaE = char2;
        }
        else{
          sprite = spritesheet2;
          spriteE=spritesheet;
          cha = char2;
          chaE = char;
        }

        heal.style= 'background : url(\'./img/Characters/Cataphract/heal.png\'); width: 8322px; height:209px; right:0px';
        healbox.id = 'healbox';
        heal.id = 'heal';
        document.getElementById('battleside').appendChild(healbox)
        healbox.appendChild(heal);

        cha.style = 'background : url(\'./img/Characters/Cataphract/skill_4.png\'); width: 129px; height:345px;';
        sprite.style='display: none'
        
        var anima = cha.animate({
          transform: ['translate3d(0px,-150px, 0)','translate3d(0px,-150px, 0)','translate3d(0px,-150px, 0)','translate3d(0px,-150px, 0)'],
          easing: ['ease-in', 'ease-out'],
        }, 1000);
        
        if(mainplayer)
        {
          var animaHeal = healbox.animate({
            transform: ['translate3d(70px,100px, 0)','translate3d(70px,100px, 0)','translate3d(70px,-50px, 0)'],
            easing: ['ease-in'],
          }, 1000);  
        }
        else{
          var animaHeal = healbox.animate({
            transform: ['translate3d(480px,100px, 0)','translate3d(480px,100px, 0)','translate3d(480px,-50px, 0)'],
            easing: ['ease-in'],
          }, 1000);  
        }
        setTimeout(function(){
          sprite.classList.remove('pauseAnimation');
          healbox.remove();
          heal.remove();
          cha.style='width: 249px;height: 203px;';
          sprite.style = 'background : url(\'./img/Characters/Cataphract/spritesheet.png\'); display:block';
        },1000); 
       }