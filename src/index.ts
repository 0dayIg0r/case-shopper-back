import app from './app';
import { createUser, getAllUsers } from './endpoints/User/user';
import { getAllProducts } from './endpoints/Products/products';
import {  getMyPayments, purchase } from './endpoints/Purchase/purchase';
import { addToCart, getUserCardById } from './endpoints/Cart/cart';


app.post('/cadastro', createUser)
app.post('/carrinho', addToCart)
app.post('/pagamento', purchase)
app.get('/carrinho', getUserCardById)
app.get('/produtos', getAllProducts)
app.get('/users/all', getAllUsers )
app.get('/minhas-compras', getMyPayments)
// terminar o de cima
