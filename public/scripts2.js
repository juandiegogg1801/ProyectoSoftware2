async function loadData() {

    try{
      var result = await fetch("http://localhost:3000/registries")
    }catch(err){
      return err
    } 
  
    return result;
  }
  
  loadData()
  .then( r => r.json())
  .then(data=>{
    const tBody = document.querySelector("#tBody")
    data.data.forEach(prj => {
      const row = document.createElement('tr')
  
      const colName = document.createElement('td')
      colName.appendChild( document.createTextNode(prj.name))
      row.append(colName)

      const colLastName = document.createElement('td');
      colLastName.appendChild(document.createTextNode(prj.last_name));
      row.append(colLastName);

      const colUserInstitute = document.createElement('td');
      colUserInstitute.appendChild(document.createTextNode(prj.userInstitute));
      row.append(colUserInstitute);

      const colDate = document.createElement('td');
      const date = `${prj.date.day}/${prj.date.month}/${prj.date.year}`;
      colDate.appendChild(document.createTextNode(date));
      row.append(colDate);

      const colGender = document.createElement('td');
      colGender.appendChild(document.createTextNode(prj.gender));
      row.append(colGender);
      
      tBody.appendChild(row)
    });
  })
  .catch(err => console.log(err))
  