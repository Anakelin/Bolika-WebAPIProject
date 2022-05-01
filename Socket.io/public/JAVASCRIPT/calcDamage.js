function ChangeEnemyHealth(dmg)
{
        hBarEnemyValue-=dmg;
        if(hBarEnemyValue>=hBarEnemyTotal)
        {
            hBarEnemyValue=hBarEnemyTotal;
        }
        if(hBarEnemyValue<=0)
        {
            winningCondition = true;
            hBarEnemyValue=0;

        }
                var newBarWidth = hBarEnemyValue/hBarEnemyTotal * 100;
                var dmgWidth = dmg/hBarEnemyValue *100;
                //hit1.style = "border: 1px solid red";
                
                hit1.style = 'width:'+dmgWidth+'px';
                
                setTimeout(function(){
                    bar1.style = 'width:'+newBarWidth+'%';
                    setTimeout(function(){
                        hit1.style = 'width:'+newBarWidth+'%';
                        
                    },60)
                }, 250);
}
function ChangeHealth(dmg)
{
      hBarValue-=dmg;
        if(hBarValue>=hBarTotal)
        {
            hBarValue=hBarTotal;
        }
    
        if(hBarEnemyValue<=0)
        {
            hBarValue=0;
            losingCondition = true;
        }

        var newBarWidth = hBarValue/hBarTotal * 100;
        var dmgWidth = dmg/hBarValue *100;
        //hit1.style = "border: 1px solid red";
        
        hit.style = 'width:'+dmgWidth+'px';
        
        setTimeout(function(){
            bar.style = 'width:'+newBarWidth+'%';
            setTimeout(function(){
                hit.style = 'width:'+newBarWidth+'%';
                
            },60)
        }, 250);
}

function ChangeEnemyEnergy(cost)
{
        if(eBarEnemyValue-cost<0)
        {
            cost = 0;
        }
        eBarEnemyValue -=cost;
        if(eBarEnemyValue>=eBarEnemyTotal)
        {
            eBarEnemyValue=eBarEnemyTotal;
        }
        var newBarEWidth = eBarEnemyValue/eBarTotal*100;
        var costWidth = cost/eBarEnemyValue*100;
        eEnemyCost.style = 'width:'+costWidth+'px';
        console.log(cost)
        console.log("width "+newBarEWidth)
        setTimeout(function(){
            eEnemyBar.style = 'width:'+newBarEWidth+'%';
            eEnemyCost.style = 'width:'+newBarEWidth+'%';
        },200)
}

function ChangeEnergy(cost)
{
    if(eBarValue-cost<0 && cost !=0)
            {
                cost = 0;
                failedMove = true;
            }
    eBarValue-=cost;
    if(eBarValue>=eBarTotal)
    {
        eBarValue=eBarTotal;
    }
    var newBarEWidth = eBarValue/eBarTotal*100;
    var costWidth = cost/eBarValue*100;
    eCost.style = 'width:'+costWidth+'px';
    
    setTimeout(function(){
        ebar.style = 'width:'+newBarEWidth+'%';
        eCost.style = 'width:'+newBarEWidth+'%';
    },200)
    
    
}