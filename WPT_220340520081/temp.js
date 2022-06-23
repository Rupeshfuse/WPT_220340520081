
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());



const bodyParser = require('body-parser');






app.use(express.static('abc'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
//whether you want nested objects support  or not

let conn = mysql.createConnection(dbparams)


//var result;

app.post('/poc1', function (req, res) {
	let input = req.query.bookid
		console.log("reading input " + req.body.v1 +  "  second " + req.body.v2)
		let output ={
			status: false,
			bookDetail: {
				bookid: 0,
				bookname: '',
				price: 0,
			},
		}
		conn.querry('select bookid,bookname,price froom book where bookid=?',
		[input],
		(err,rows) => {
			if (err) {
			console.log('error occured' + err)
		} else {
			if (rows.length >0){
				output.status = true
				output.bookDetail = rows[0]
			}
		}
		res.send(output)
	}
		)
})
    	
		
		
		//var xyz ={ v1:37, v2:35};
        //res.send(xyz);
   // });


//app.get('/poc2', function (req, res) {
    
	
   //     console.log("reading input " + req.query.xyz);
		
    //	var xyz ={ v1:37, v2:35};

	//	res.send(xyz);

	//	});




app.listen(8081, function () {
    console.log("server listening at port 800...");
});