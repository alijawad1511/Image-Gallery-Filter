        var bgfilter = false;
        var hatfilter = false;
        var hoodiefilter = false;
        var skullfilter = false;
        var hairsfilter = false;
        
        var hairColor = [false,false,false,false,false];
        var skullColor = [false,false,false,false,false];
        var hoodieColor = [false,false,false,false,false];
        var hatColor = [false,false,false,false,false];

        
//  Background Filters       

        function setOrangeBgFilter(){
            let elements = document.getElementsByClassName('img-box');

            for(let i=0;i<elements.length;i++){
                elements[i].style.backgroundImage = "url(../images/bg-orange.JPG)";
            }

        }

        function setPinkBgFilter(){
            let elements = document.getElementsByClassName('img-box');

            for(let i=0;i<elements.length;i++){
                elements[i].style.backgroundImage = "url(../images/bg-pink.JPG)";
            }

        }

        function setGreenBgFilter(){
            let elements = document.getElementsByClassName('img-box');

            for(let i=0;i<elements.length;i++){
                elements[i].style.backgroundImage = "url(../images/bg-green.JPG)";
            }

        }

        function setRedBgFilter(){
            let elements = document.getElementsByClassName('img-box');

            for(let i=0;i<elements.length;i++){
                elements[i].style.backgroundImage = "url(../images/bg-red.JPG)";
            }

        }

        function setIndigoBgFilter(){
            let elements = document.getElementsByClassName('img-box');

            for(let i=0;i<elements.length;i++){
                elements[i].style.backgroundImage = "url(../images/bg-indigo.JPG)";
            }

        }

        function setDarkgreyBgFilter(){
            let elements = document.getElementsByClassName('img-box');

            for(let i=0;i<elements.length;i++){
                elements[i].style.backgroundImage = "url(../images/bg-darkgrey.JPG)";
            }

        }



// #################( Filters )#####################

        // function applyHairsFilter(){
        //     let all = document.getElementsByClassName('img-box');

        //     if(hoodiefilter==false){

        //         for(let i=0;i<all.length;i++)
        //         {
        //             all[i].style.display = "none";
        //         }

        //         let hairs = document.getElementsByClassName('hairs');

        //         for(let i=0;i<hairs.length;i++)
        //         {
        //             hairs[i].style.display = "block";
        //         }

        //     }
        //     // console.log("Hello");
            
        // }

        // function applyHatFilter(){
        //     let all = document.getElementsByClassName('img-box');

        //     if(hoodiefilter==false){

        //         for(let i=0;i<all.length;i++)
        //         {
        //             all[i].style.display = "none";
        //         }

        //         let hats = document.getElementsByClassName('hat');

        //         for(let i=0;i<hats.length;i++)
        //         {
        //             hats[i].style.display = "block";
        //         }

        //     }
            
        // }

        // function applyHoodieFilter(){
        //     let all = document.getElementsByClassName('img-box');

        //     if(hoodiefilter==false){

        //         for(let i=0;i<all.length;i++)
        //         {
        //             all[i].style.display = "none";
        //         }

        //         let hoodies = document.getElementsByClassName('hoodie');

        //         for(let i=0;i<hoodies.length;i++)
        //         {
        //             hoodies[i].style.display = "block";
        //         }

        //     }
            
        // }

        // function applySkullFilter(){
        //     let all = document.getElementsByClassName('img-box');

        //     if(skullfilter==false){

        //         for(let i=0;i<all.length;i++)
        //         {
        //             all[i].style.display = "none";
        //         }

        //         let skulls = document.getElementsByClassName('skull');
        //         // console.log(skulls);

        //         for(let i=0;i<skulls.length;i++)
        //         {
        //             skulls[i].style.display = "block";
        //         }

        //     }
            
        // }

        function resetFilters(){
            location.reload();
        }