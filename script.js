var loaded = addEventListener('DOMContentLoaded',function(){
    var text = document.querySelector('span');
        var tableau = [
            "La vie est un mystère à vivre, non un problème.",
            "Le bonheur n'est pas un but, c'est une conséquence.",
            "La simplicité est la sophistication suprême.",
            "La plus grande gloire est de se relever toujours.",
            "Le succès est la somme de petits efforts répétés.",
            "La créativité, c'est l'intelligence qui s'amuse.",
            "Le voyage de mille lieues commence par un pas.",
            "La patience est amère, mais son fruit est doux.",
            "L'essentiel est invisible pour les yeux.",
            "Rien ne se perd, tout se transforme.",
            "Le meilleur reste à venir, croyez en vos rêves.",
            
        ]

    var button = this.document.querySelector('button');
        button.addEventListener('click',function(){
            
            for (i=0;i<tableau.length;i++){
                text.textContent=tableau[Math.floor( Math.random()*11)]
            }
        })
})
