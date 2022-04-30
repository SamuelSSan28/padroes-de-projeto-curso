import {MyDatabaseClassic } from './db/my-database-classic';
import './module_a' // para executar ele

const myDatabaseClassic = MyDatabaseClassic.getInstace();

myDatabaseClassic.add({name:"Fade",age:30});
myDatabaseClassic.add({name:"Brinstone",age:40});
myDatabaseClassic.add({name:"Killjoy",age:35});

myDatabaseClassic.show();

