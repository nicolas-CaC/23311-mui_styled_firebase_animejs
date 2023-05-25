import { addDoc, collection, doc, getDocs, setDoc } from 'firebase/firestore/lite'
import { firebaseDb } from '../config/config'

const actualCollection = 'productos'
const productosDb = collection(firebaseDb, actualCollection)


// Agregar documento con ID automático - addDoc
export const addProduct = (doc) =>
    addDoc(productosDb, doc)

// Agregar varios documentoS con ID automático 
export const addProducts = (docs) =>
    docs.forEach(item => addProduct(item))


// Agregar documento con Id propio    
export const addProductWithId = (newDoc) => {

    const id = newDoc.id.toString()
    const docRef = doc(firebaseDb, actualCollection, id)
    delete newDoc.id

    const res = setDoc(docRef, newDoc, { merge: false })
        .then(() => 'Se actualizó bien')
        .catch(() => 'Hubo problemas de escritura')

    return res
}


// Agregar documentos con id propio
export const addProductsWithId = (docs) =>
    docs.forEach(doc => addProductWithId(doc))


// Obtener documentos - getDocs
export const getProducts = async () => {
    const collection = await getDocs(productosDb)
    const products = collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
    })
    return products
}



