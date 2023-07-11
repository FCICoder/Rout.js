


var Quates = [
    {'A_ID': 'Jim Rohn', 
     'Q_ID': 'Beware of what you become in pursuit of what you want.'
    },
    {'A_ID': 'Epictetus', 
     'Q_ID': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'A_ID': 'Frank Sinatra', 
     'Q_ID': 'The best revenge is massive success.'
    },
    {'A_ID': 'Wayne Gretzy', 
     'Q_ID': 'You miss 100% of the shots you don\'t take.'
    },
    {'A_ID': 'Nelson Mandela', 
     'Q_ID': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'A_ID': 'Elbert Hubbard', 
     'Q_ID': 'Do not take life too seriously. You will not get out alive.'
    },
    {'A_ID':' Narcotics Anonymous',
     'Q_ID':' “Insanity is doing the same thing, over and over again, but expecting different results.”'
    },
    {'Q_ID':'“Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel',
     'A_ID' :'  Maya Angelou'
    }
];

var assisstArray=[
    {  
        'Q_ID':'You know youre in love when you cant fall asleep because reality is finally better than your dreams.',
        'A_ID':'Dr. Seuss'
    },
    
];




function lotsofQuates(){
    var random = Number.parseInt(Math.random()*Quates.length);
    var random = Number.parseInt(Math.random()*assisstArray.length );
    document.querySelector('#Q_ID').textContent = `--${Quates[random].Q_ID}`;
    document.querySelector('#A_ID').textContent = `--${Quates[random].A_ID}`;
    Quates.splice(random,1)
    assisstArray.push(Quates[random])
   
   console.log(Quates,'Q')
if(assisstArray.includes(Quates[random])&& assisstArray.length==Quates.length){
   
    document.querySelector('#Q_ID').textContent = `--${Quates[random].Q_ID}`;
    document.querySelector('#A_ID').textContent = `--${Quates[random].A_ID}`;
    Quates.splice(random,1)
    assisstArray.push(Quates[random])
   
   console.log(Quates,'Q')
    
}else{
    document.querySelector('#Q_ID').textContent = `--${assisstArray[random].Q_ID}`;
    document.querySelector('#A_ID').textContent = `--${assisstArray[random].A_ID}`;
    assisstArray.splice(random,1)
    Quates.push(assisstArray[random]);
    console.log(assisstArray,'a')
}
}




     

