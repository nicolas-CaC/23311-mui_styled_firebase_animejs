import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore/lite'
import { firebaseDb } from '../config/config'

const actualCollection = 'productos'
const productosDb = collection(firebaseDb, actualCollection)

// C - Create

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

// R - Read

// Obtener documentos - getDocs
export const getProducts = async () => {
    const collection = await getDocs(productosDb)
    const products = collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
    })
    return products
}

// Buscar Documento por Id
export const getProductById = (id) => {
    const idString = id.toString()
    const itemRef = doc(firebaseDb, actualCollection, idString)
    let todo
    getDoc(itemRef).then(res => console.log(res.data()))
}

// Buscar documento por 'X' campo
export const getProductbyName = async (name) => {
    const dataRef = query(productosDb, where('name', '==', name))
    let found = await getDocs(dataRef)
    found = found.docs.map(doc => doc.data())
    console.log(found)
}


// U - Update

// Actualizar o crear
export const setProduct = async (values, merge = false) => {

    const id = values.id.toString()
    delete values.id

    const itemRef = doc(firebaseDb, actualCollection, id)
    setDoc(itemRef, values, { merge })
}


// Actualizar o ignorar
export const updateProduct = async (values, merge = false) => {

    const id = values.id.toString()
    delete values.id

    const itemRef = doc(firebaseDb, actualCollection, id)
    updateDoc(itemRef, values, { merge })
}


// D - Delete
// Borrar documento

export const deleteProduct = (id) => {
    const idToString = id.toString()
    const itemRef = doc(firebaseDb, actualCollection, idToString)
    deleteDoc(itemRef)
}


