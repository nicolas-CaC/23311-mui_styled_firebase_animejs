import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App/App'
import { CssBaseline } from '@mui/material'
import { LoginProvider } from './Login/contexts/LoginContext'
import { addProduct, addProductWithId, addProducts, addProductsWithId, deleteProduct, getProductById, getProductbyName, getProducts, setProduct, updateProduct } from './Global/firebase/utilities/productosFirebase'

const a = { id: 1, y: '2', z: false, a: 'ww' }
const b = { id: 2, y: 'dfasdf', z: false, c: 'churro' }
const c = { id: 3, y: 1, z: false }

// addProduct(a).then(res => console.log(res.id))
// addProducts([a, b, c])
// addProductWithId(a).then(res => console.log(res))
// addProductsWithId([a, b, c])
// getProducts().then(res => console.log(res))
// getProductById(2)
// getProductbyName('dfasdf')
// setProduct({ id: 7, a: 'Papitas', z: true })
// updateProduct({ id: 7, a: 'Panchos', z: true })
// deleteProduct(7)


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CssBaseline />
		<LoginProvider>
			<App />
		</LoginProvider>
	</React.StrictMode>,
)
