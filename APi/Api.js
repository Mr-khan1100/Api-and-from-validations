async function callApi(){
    try{
        var result = await fetch('https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817');
        console.log(typeof[result]);
        result = await result.json(); 
        console.log(typeof[result ]);
    }
    catch(error){
        console.log(error)
    }

    console.log(Object.values(result));

    console.log(Object.values(result.data));
    console.log(typeof[result ]);

    document.getElementById('table_b').innerHTML = Object.values(result.data).map((user)=>`<tr>  
    <td>${user.name}</td>
    <td>${user.office}</td>
    <td>${user.position}</td>
    <td>${user.salary}</td>
</tr>`).join("-");
}


callApi()