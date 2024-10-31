const token = localStorage.getItem("token");
console.log(token)

const update = document.querySelector('#student_update');
const message = document.querySelector("p");

update.addEventListener('click', async function (event) {

    const email = document.querySelector('#student_email').value;
    const name = document.querySelector('#student_name').value;
    const school = document.querySelector('#student_school').value;
    const gradYear = document.querySelector('#student_gradYear').value;

    let gpa = "";
    if(document.getElementById('input-GPA') != null){
        gpa = document.querySelector('#input-GPA').value;
    }
    else{
        gpa = "";
    }

    let position = "";
    if(document.getElementById('input-Position') != null){
        position = document.querySelector('#input-Position').value;
    }
    else{
        position = "";
    }

    let height = "";
     if(document.getElementById('input-Height') != null){
         height = document.querySelector('#input-Height').value;
    }
    else{
        height = "";
    }

    let weight = "0";
     if(document.getElementById('input-Weight') != null){
        weight = document.querySelector('#input-Weight').value;
    }
    else{
        weight = "0";
    }

    let forty_time = "0";
    if(document.getElementById('input-40-Time') != null){
        forty_time = "document.querySelector('#input-40-Time').value";
    }
    else{
        forty_time = "0";
    }

    let pass_yards = "0";
    if(document.getElementById('input-Pass-Yards') != null){
        pass_yards = document.querySelector('#input-Pass-Yards').value;
    }
    else{
        pass_yards = "0";
    }

    let comp_percentage = "0";
    if(document.getElementById('input-Completion-Percentage') != null){
        comp_percentage = document.querySelector('#input-Completion-Percentage').value;
    }
    else{
        comp_percentage = "0";
    }

    let pass_tds = "0";
     if(document.getElementById('input-Passing-Touchdowns') != null){
        pass_tds = document.querySelector('#input-Passing-Touchdowns').value;
    }
    else{
        pass_tds = "0";
    }

    let pass_ints = "0";
    if(document.getElementById('input-Pass-Interceptions') != null){
        pass_ints = document.querySelector('#input-Pass-Interceptions').value;
    }
    else{
        pass_ints = "0";
    }

    let rec = "0";
    if(document.getElementById('input-Receptions') != null){
        rec = document.querySelector('#input-Receptions').value;
    }
    else{
        rec = "0";
    }

    let rec_yards = "0";
    if(document.getElementById('input-Receiving-Yards') != null){
        rec_yards = document.querySelector('#input-Receiving-Yards').value;
    }
    else{
        rec_yards = "0";
    }

    let red_tds = "0";
    if(document.getElementById('input-Red-Zone-Touchdowns') != null){
        red_tds = document.querySelector('#input-Red-Zone-Touchdowns').value;
    }
    else{
        red_tds = "0";
    }

    let rush_yards = "0";
     if(document.getElementById('input-Rush-Yards') != null){
        rush_yards = document.querySelector('#input-Rush-Yards').value;
    }
    else{
        rush_yards = "0";
    }

    let rush_tds = "0";
     if(document.getElementById('input-Rush-Touchdowns') != null){
        document.querySelector('#input-Rush-Touchdowns').value;
    }
    else{
        rush_tds = "0";
    }

    let yards_per_att = "0";
     if(document.getElementById('input-Yards-Per-Attempt') != null){
        yards_per_att = document.querySelector('#input-Yards-Per-Attempt').value;
    }
    else{
        yards_per_att = "0";
    }

    let tackles = "0";
     if(document.getElementById('input-Tackles') != null){
        tackles = document.querySelector('#input-Tackles').value;
    }
    else{
        tackles = "0";
    }

    let sacks = "0";
     if(document.getElementById('input-Sacks') != null){
        sacks = document.querySelector('#input-Sacks').value;
    }
    else{
        sacks = "0";
    }

    let ints = "0";
     if(document.getElementById('input-Interceptions') != null){
        ints = document.querySelector('#input-Interceptions').value;
    }
    else{
        ints = "0";
    }

    let tfls = "0";
     if(document.getElementById('input-Tackle-For-Loss') != null){
        tfls = document.querySelector('#input-Tackle-For-Loss').value;
    }
    else{
        tfls = "0";
    }

    let fg_made = "0";
     if(document.getElementById('input-Field-Goal-Made') != null){
        fg_made = document.querySelector('#input-Field-Goal-Made').value;
    }
    else{
        fg_made = "0";
    }

    let fg_missed = "0";
     if(document.getElementById('input-Field-Goal-Missed') != null){
        fg_missed = document.querySelector('#input-Field-Goal-Missed').value;
    }
    else{
        fg_missed = "0";
    }

    let punt_avg = "0";
     if(document.getElementById('input-Punt-Average') != null){
        punt_avg = document.querySelector('#input-Punt-Average').value;
    }
    else{
        punt_avg = 0;
    }
    
    const userData = {
        email: email,
        name: name,
        school: school,
        gradYear: gradYear,
        gpa: gpa,
        position: position,
        height: height,
        weight: weight,
        forty_time: forty_time,
        pass_yards: pass_yards,
        comp_percentage: comp_percentage,
        pass_tds: pass_tds,
        pass_ints: pass_ints,
        rec: rec,
        rec_yards: rec_yards,
        red_tds: red_tds,
        rush_yards: rush_yards,
        rush_tds: rush_tds,
        yards_per_att: yards_per_att,
        tackles: tackles,
        sacks: sacks,
        ints: ints,
        tfls: tfls,
        fg_made: fg_made,
        fg_missed: fg_missed,
        punt_avg: punt_avg
        
    };

    console.log(userData)

    await editStudentProfile(userData);

});

async function editStudentProfile(userData) {
    const mssg = document.querySelector("p");
    const url = "https://football-api-server-ane2c4bwdacvf8f6.eastus-01.azurewebsites.net/studentuser/editprofile";
    console.log("test")
    console.log(userData)
    
    const options = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(userData)
    }

    console.log(JSON.stringify(userData))
        const response = await fetch(url, options);


        console.log(response)
        console.log(response.status)

        if (response.status === 200) {
          
                mssg.innerHTML = 'Student Profile Updated!';
                mssg.style.color = 'white'
                console.log(userData)
    
        } else {
            const errorData = await response.json();
            mssg.innerHTML = "Error: " + errorData.message;
            mssg.style.color = 'red';
        }
   
}

