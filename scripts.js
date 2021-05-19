
function addEventos(){

        var borda = document.getElementById('text-1Id')
        var legenda = document.getElementById('filhaId')


        var btn1 = document.getElementById('btnQuest-1')

        btn1.addEventListener('click', (event) =>{
            var nameSophia = document.getElementById('sophiaId')
            var nameSofia = document.getElementById('sofiaId')
            var nameClaudia = document.getElementById('claudiaId')
            var nameAnastacia = document.getElementById('anastaciaId')
    
            if(nameSophia.checked == true){
                borda.style = 'border: 1px solid #090'
                legenda.style = 'color: #008000;'
    
            }else if(nameSofia.checked == true){
                borda.style = 'border: 1px solid #f00'
                legenda.style = 'color: #f00;'
    
            }else if(nameClaudia.checked == true){
                borda.style = 'border: 1px solid #f00'
                legenda.style = 'color: #f00;'
    
            }else if(nameAnastacia.checked == true){
                borda.style = 'border: 1px solid #f00;'
                legenda.style = 'color: #f00'
            
            }else{
                alert('Marca todas as opções Amor kkkkk')
            }
    
    })
    
        var btn2 = document.getElementById('btnQuest-2')

        btn2.addEventListener('click', (event) => {


            var borda2 = document.getElementById('borda2')
            var texto2 = document.getElementById('texto2')
    
            var nCalabresa = document.getElementById('calabresa')
            var n4queijos = document.getElementById('4queijos')
            var nportuguesa = document.getElementById('portuguesa')
            var nFrangocpy = document.getElementById('frangoCpy')
    
            if(nCalabresa.checked == true){
                borda2.style = 'border: 1px solid #f00'
                texto2.style = 'color: #f00;'
            
            }else if(n4queijos.checked == true){
                borda2.style = 'border: 1px solid #090'
                texto2.style = 'color: #008000;'
            }
    
            else if(nportuguesa.checked == true){
                borda2.style = 'border: 1px solid #f00'
                texto2.style = 'color: #f00;'
           
            }else if(nFrangocpy.checked == true){
                borda2.style = 'border: 1px solid #f00'
                texto2.style = 'color: #f00;'
            
            }else{
                alert('Marca todas as opções Amor kkkkk')
            }
    
    })

    var btn3 = document.getElementById('btnQuest-3')

        btn3.addEventListener('click', (event) => {


            var borda3 = document.getElementById('borda3')
            var texto3 = document.getElementById('texto3')
    
            var nJaneiro = document.getElementById('janeiro')
            var nFevereiro = document.getElementById('fevereiro')
            var nMarco = document.getElementById('marco')
            var nAbril = document.getElementById('abril')
    
            if(nJaneiro.checked == true){
                borda3.style = 'border: 1px solid #f00'
                texto3.style = 'color: #f00;'
            
            }else if(nFevereiro.checked == true){
                borda3.style = 'border: 1px solid #f00'
                texto3.style = 'color: #f00;'
            }
    
            else if(nMarco.checked == true){
                borda3.style = 'border: 1px solid #090'
                texto3.style = 'color: #008000;'
           
            }else if(nAbril.checked == true){
                borda3.style = 'border: 1px solid #f00'
                texto3.style = 'color: #f00;'
            
            }else{
                alert('Marca todas as opções Amor kkkkk')
            }
    })

    var btn4 = document.getElementById('btnQuest-4')

    btn4.addEventListener('click', (event) => {

        var borda4 = document.getElementById('borda4')
        var texto4 = document.getElementById('texto4')

        var nDia1 = document.getElementById('dia-1')
        var nDia3 = document.getElementById('dia-3')
        var nDia5 = document.getElementById('dia-5')
        var nDia8 = document.getElementById('dia-8')


        if(nDia1.checked == true){
            borda4.style = 'border: 1px solid #f00;'
            texto4.style = 'color: #f00;'
        
        }else if(nDia3.checked == true){
            borda4.style = 'border: 1px solid #f00;'
            texto4.style = 'color: #f00;'
        
        }else if(nDia5.checked == true){
            borda4.style = 'border: 1px solid #090;'
            texto4.style = 'color: #090;'
       
        }else if(nDia8.checked == true){
            borda4.style = 'border: 1px solid #f00;'
            texto4.style = 'color: #f00;'
        
        }else{
            alert('Marca todas as opções Amor...')
        }

    })


    var btn5 = document.getElementById('btnQuest-5')

    btn5.addEventListener('click', (event) => {

        var borda5 = document.getElementById('borda5')
        var texto5 = document.getElementById('texto5')
        
        var nCh = document.getElementById('chocolate') 
        var nBaunilha = document.getElementById('baunilha') 
        var nFlocos = document.getElementById('flocos') 
        var nMorango = document.getElementById('morango') 


        if(nCh.checked == true){
            borda5.style = 'border: 1px solid #f00;'
            texto5.style = 'color: #f00;'
        
        }else if(nBaunilha.checked == true){
            borda5.style = 'border: 1px solid #f00;'
            texto5.style = 'color: #f00;'
        
        }else if(nFlocos.checked == true){
            borda5.style = 'border: 1px solid #090;'
            texto5.style = 'color: #090;'
        
        }else if(nMorango.checked == true){
            borda5.style = 'border: 1px solid #f00;'
            texto5.style = 'color: #f00;'
        
        }else {
            alert('Marca todas as opções amor...')
        }

    })

    var btn6 = document.getElementById('b')

    btn6.addEventListener('click', (event) => {

        var borda6 = document.getElementById('borda6')
        var texto6 = document.getElementById('texto6')

        var nDito1 = document.getElementById('eu_te_amo') 
        var nDito2 = document.getElementById('nentendi') 
        var nDito3 = document.getElementById('casacmg') 
        var nDito4 = document.getElementById('teamox1') 

        if(nDito1.checked == true){ 
            borda6.style = 'border: 1px solid #090;'
            texto6.style = 'color: #090;'
            btnFinal.style = 'display: flex;'
        
        }else if(nDito2.checked == true){
            borda6.style = 'border: 1px solid #f00;'
            texto6.style = 'color: #f00;'

        }else if(nDito3.checked == true){
            borda6.style = 'border: 1px solid #f00;'
            texto6.style = 'color: #f00;'

        }else if(nDito4.checked == true){
            borda6.style = 'border: 1px solid #f00;'
            texto6.style = 'color: #f00;'

        }else {
            alert('Marca todas as opções Amor...')
        }   

    })


    var btnFinal = document.getElementById('btnFinal')

    btnFinal.addEventListener('click', (event) => {
        alert('Vida... eu te amo infinitamente, eu não sei o que faria sem você... tenho tanto medo de te perder, me desculpa... EU TE AMO INFINITAMENTE')
    })

}
window.addEventListener('load', addEventos)