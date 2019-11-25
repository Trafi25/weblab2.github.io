const express = require('express')
const app = express()

const PORT = process.env.PORT || 80
app.get('/', (req, res) => {
    res.end(
        `
    <HTML>
    <HEAD>
    <meta charset="utf-8">
    <TITLE> Дані з галочок в анкеті перекладача</TITLE>
    <script language="JavaScript">
    function test(obj1,obj2,obj3,obj4){
       var a= 0 
       var	b=0
       if ((obj1.elements[0]).checked)
       a=150
    else
       a=200
   if ((obj2.elements[0]).checked)
    a+=70
    else
    a+=10
    if ((obj4.elements[0]).checked)
    a+=0
    else
    a=a+a*0.2 
    b=a;
    if ((obj3.elements[0]).checked)
    a*=9
    else if((obj3.elements[1]).checked)
    a*=36
    else
    a*=102
    alert("Всего:"+a+"     "+"Одно занятие:"+b)
    }
    </script>
    </HEAD>
    <BODY>
    <p><h2>Анкета</p></h2><br />
    <form name="form1" id="ra1">
   Выберите Предмет <br />
   <input type="radio" name="predm" value="math" /> Матан <br />
   <input type="radio" name="predm" value="prorgam" /> ОП<br />
   </form>
   <form name="form2" id="ra2">
   Выберите язык <br />
   <input type="radio" name="lern" value="engl" /> Англиский <br />
   <input type="radio" name="lern" value="french" /> Русский<br />
   </form>
   <form name="form3" id="ra3">
   Выберите длительность <br />
   <input type="radio" name="time" value="1mounth" /> Месяц <br />
   <input type="radio" name="time" value="6mounth" /> Пол года<br />
   <input type="radio" name="time" value="year" /> Год<br />
   </form>
   <form name="form4" id="ra4">
   Выберите Предмет <br />
   <input type="radio" name="forma" value="all" /> Оплата сразу <br />
   <input type="radio" name="forma" value="pice" /> Оплата по частям<br />
   </form>
   <input type="button" value="Закончить" onclick="test(form1,form2,form3,form4)"><hr>
    </BODY>
    </HTML>
    `)
})
app.get('/about', (req, res) => {
    res.end('<h1>About</h1>')
})

app.listen(PORT, () =>{
    console.log('Server has been started...')
})
