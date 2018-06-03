var diamond_pos = [
    [0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
];

var score = 64;
var count = 0;


$(document).ready(function(){
    function changeToDiamond(ele){   
        $(ele).removeClass('unknown').addClass('diamond');        
        count++;        
        if(count == 8){
            alert('All 8 diamonds found. Your score is ' + score);
            $('div.cell.unknown').off('click');
            return;
        }

    }

    function changeToBlank(ele){        
        $(ele).removeClass('unknown');
    }
    $('div.cell.unknown').click(function(){
        var row_index = $(this).parent().parent().index();
        var col_index = $(this).parent().index();
        console.log('Diamond Value = ' + diamond_pos[row_index][col_index]);
        score--;
        if(diamond_pos[row_index][col_index] == 1)
            changeToDiamond(this);                   
        else
            changeToBlank(this);
        
     }
    );
     
     
});
