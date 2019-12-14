let count = 3,
    total = 0,
    report, 
    details,
    residence,
    sunIntensity,
    solarPanels,
    energyPerHour,
    product,
    obj = [],
    ratings = {
        "LED Light Bulb":10,"CFL Light Bulb":14, "Incandescent Bulb":60,"LCD/LED TV/DISPLAY":90,"Plasma":150,
        "CRT MONITOR":120, "Game Console":200, "Desktop(minus display)":300, "Laptop":60, "Wi-Fi Router":6,
        "Printer":500, "DVR":30, "Cell Phone Charger":6, "Cordless Phone":3, "Alarm Clock Radio":2, "Electric Furnace":18000,
        "Space Heater":1500, "Water Heater":4000, "Central Air Conditioner":3500, "Air Conditional":1500, "Washing Machine":1000,
        "Clothes Dryer":3000, "Cooking Stove Top":1500, "Electric Oven":2400, "DishWasher":1800, "Freezer":100,
        "Refrigerator":400, "Coffee Maker":800, "Microwave":1200, "Toaster":1200, "Hair Dryer":1500, "Iron":1100,"Vacuum":1400,
        "Ceiling Fan":75
    },
    states = {
        "Select State": 0, "Abia": 5, "Adamawa": 9,"Akwa Ibom": 5,"Anambra": 5.5,"Bauchi": 8.5,"Bayelsa": 5.5,"Benue": 7.5,"Borno": 11,"Cross River": 5,"Delta": 4.5,
        "Ebonyi": 5.5, "Enugu": 5, "Edo": 6, "Ekiti": 5.5, "Gombe": 9.5, "Imo": 6, "Jigawa": 9.5, "Kaduna": 10.5, "Kano": 10.5, "Katsina": 11,
        "Kebbi": 11,"Kogi": 7.5, "Kwara": 6.5, "Lagos": 6, "Nasarawa": 8.5, "Niger": 9, "Ogun": 5.5, "Ondo": 5, "Osun": 5, "Oyo": 5.5, "Plateau": 9,
        "Rivers": 6, "Sokoto": 10.5, "Taraba": 10, "Yobe": 9.5, Zamfara: 10.5, "Abuja": 8 
    }



const createNewRow = () =>{
    count++

  let newRow = ` <div class="entry" id="${count}-entry">
  <div class="row">
    <div class="col-lg-4 form-group">
        <select required name="" id="appliance-${count}" class="appliances form-control">
            <option value="" selected hidden>Select Appliance</option>
          </select>
    </div>
    <div class="col-lg-2 form-group">
        <input type="number" id="qty-${count}" class="qty form-control" min="0" max ="999" placeholder="Quantity">
    </div>
    <div class="col-lg-2 form-group">
        <input type="text" id="rating-${count}"  class="watts form-control" placeholder="Power Rating" disabled>
    </div>
    <div class="col-lg-2 form-group">
        <input type="number" id="hours-${count}" class="hours form-control" min="0" max="24" step="1" placeholder="Number of Hours" >
    </div>
    <div class="col-lg-2 form-group">
        <input type="text" id="dailyUsage-${count}" class="daily form-control" placeholder="Daily Usage" disabled>
    </div>
    </div>
</div> ` 

  $('#entries').append(newRow);
  addList(ratings, $('.appliances'))
}

const addList = (array , element) => {
   element.select2({
       data: Object.keys(array)
   })
}

addList(states, $('#sunhours'));
addList(ratings, $('.appliances'))


$('#sunhours').on('change', function(){
    residence = sunhours.value
    let i = Object.keys(states).indexOf(residence)
    if (i > 0) {
        $('#watts').val(Object.values(states)[i])
        sunIntensity = Object.values(states)[i]
    }
})

$('#calculator').on('change', '.appliances', function(){
    let sequence = this.id.split('-')[1]
    console.log(sequence)
    let i = Object.keys(ratings).indexOf($(this).val());
    if (i >= 0){
        console.log(Object.values(ratings)[i]);
        $(`#rating-${sequence}`).val(Object.values(ratings)[i])
    } else {
        $(`#rating-${sequence}`).val(0)
    }
})


$('#calculator').on('change', 'input, select', function(){
    let sequence = this.id.split('-')[1]
    let eachDevice = $(`#qty-${sequence}`).val() 
    * $(`#rating-${sequence}`).val() * 
    $(`#hours-${sequence}`).val()

    parseFloat($(`#dailyUsage-${sequence}`).val(eachDevice)).toFixed(2)
})


$('#addRow').on('click', function(){
    console.log('adepiper')
    createNewRow(ratings);
})

$('#calculator').on('click', 'remove-row', function(){
    $(this).closest('div').remove()
})


const recommendProduct = (energyPerHour) => {
    let offer = ''
    switch(true) {
        case energyPerHour < 1000:
        offer = "get 1"
        break;
        case energyPerHour < 5000:
        offer = "get 2"
        break;
        case energyPerHour < 7000:
        offer = "get 3"
        break;
        case energyPerHour < 10000:
        offer = "get 4"
        break;
        default:
            offer = "get 4"
    }
    return offer;
}

document.querySelectorAll('.showResult').forEach( (e) => {
    e.addEventListener('click', function(){
        if (residence !== undefined){
        $(".appliances").each(function(index, value){
            obj[index] = {}
            obj[index].appliances = $(this).value
          
           
        })
        $(".qty").each(function(index, value){
            
            obj[index].quantity = $(this).value
            
        })
        $(".watts").each(function(index, value){
           
            obj[index].rating = $(this).value
            
        })
        $(".hours").each(function(index, value){
           
            obj[index].hours = $(this).value
           
        })
        $('.daily').each(function(index, value){
            obj[index].energyConsuption = $(this).val()
            
            total += +$(this).val() * 1.25;
            energyPerHour = (total/sunIntensity).toFixed(2)
            solarPanels = Math.ceil(energyPerHour / 320)
            console.log(total)
        })

        product = recommendProduct(energyPerHour)
        details = `Your daily energy need is <strong>${total}</strong> watts-hr. The average sun-hours in <b>${residence}</b> 
        is <b>${sunIntensity}</b>hours. Hence, you will need <b>${solarPanels}</b> 
        solar panel(s) to provide an average of <b>${energyPerHour}</b> 
        watts per sun-hour. Armed with this information, 
        we would like to recommend our <b>${product}</b>.
        <div class="mt-2">
        <button href="" class="btn btn-primary" disabled>Shop now
              </button>
              </div>`
              ;

        $('#details').html(details)
        $('#details').css({
            'width': '300px',
            'min-height': '120px',
            'border': '1px solid black',
            'border-radius': '10px',
            'margin': '10% auto',
            'line-height': '1.6em',
            'padding': '10px'
        })
        $('.showResult').attr('disabled', 'disabled')
        $('#addRow').attr('disabled', 'disabled')

        report = true

        }
        
   else {
    $('#guide').html('<p>please enter your state of residence</p>')
   }
})
})


$('#reset').on('click', function(){
    $('input').val('')
    $('#details').html('');
    $('select').val('')

    document.location.reload()
})