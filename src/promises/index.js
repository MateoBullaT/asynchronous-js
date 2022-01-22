const somethingWillHappen = ()=>{
    return new Promise((resolve, reject) =>{
        if(true){
            resolve("Aprobado.");
        } else{
            reject("Hubo un error, vuelve a intentarlo.");
        }
    });
};

somethingWillHappen()
.then(Response => console.log(Response))
.catch(err => console.log(err));



const somethingWillHappen2 = ()=>{
    return new Promise((resolve, reject)=>{
        if(true){
            setTimeout(()=>{
                resolve("Verdadero");
            }, 3000)
        } else{
            const error = new Error("Falso, como esta afirmación.");
            reject(error);
        }
    });
};

somethingWillHappen2()
.then(Response=> console.log(Response))
.catch(error=> console.error(error));


Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response =>{
        console.log("Array de los resultados", response)
    })
    .catch(err =>{
        console.error(err);
    });

