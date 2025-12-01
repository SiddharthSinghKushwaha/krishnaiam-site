import { db } from './firebase-config.js';
import { collection, addDoc, getDocs, doc, getDoc, deleteDoc, updateDoc, query, orderBy, limit, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// --- Quotes ---

export async function addQuote(text) {
    try {
        const docRef = await addDoc(collection(db, "quotes"), {
            text: text,
            createdAt: serverTimestamp()
        });
        return docRef.id;
    } catch (e) {
        console.error("Error adding quote: ", e);
        throw e;
    }
}

export async function getQuotes() {
    const q = query(collection(db, "quotes"), orderBy("createdAt", "desc"), limit(20)); // Increased limit
    const querySnapshot = await getDocs(q);
    const quotes = [];
    querySnapshot.forEach((doc) => {
        quotes.push({ id: doc.id, ...doc.data() });
    });
    return quotes;
}

export async function deleteQuote(id) {
    await deleteDoc(doc(db, "quotes", id));
}

export async function updateQuote(id, text) {
    const docRef = doc(db, "quotes", id);
    await updateDoc(docRef, {
        text: text
    });
}

// --- Articles ---

export async function addArticle(title, content, summary) {
    try {
        const docRef = await addDoc(collection(db, "articles"), {
            title: title,
            content: content,
            summary: summary,
            createdAt: serverTimestamp()
        });
        return docRef.id;
    } catch (e) {
        console.error("Error adding article: ", e);
        throw e;
    }
}

export async function getArticles(limitCount = 20) {
    const q = query(collection(db, "articles"), orderBy("createdAt", "desc"), limit(limitCount));
    const querySnapshot = await getDocs(q);
    const articles = [];
    querySnapshot.forEach((doc) => {
        articles.push({ id: doc.id, ...doc.data() });
    });
    return articles;
}

export async function getArticleById(id) {
    const docRef = doc(db, "articles", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        return null;
    }
}

export async function deleteArticle(id) {
    await deleteDoc(doc(db, "articles", id));
}

export async function updateArticle(id, title, content, summary) {
    const docRef = doc(db, "articles", id);
    await updateDoc(docRef, {
        title: title,
        content: content,
        summary: summary
    });
}
