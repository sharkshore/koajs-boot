var qs=require('qs')
var fs=require('fs')
var logger=require('./log-config')

var Koa=require('koa')
var app=new Koa()




//fs同步读取文件内容
var json_str=fs.readFileSync('package.json',
		{
			encoding:'utf8',
			flag:'r',
		}
)

//使用qs包
var qs_str=qs.stringify(JSON.parse(json_str))


app.use(ctx =>{
	ctx.body='hello koa'
	logger.info('ctx:',ctx);
})

app.listen(3001)
