import { db } from "../../week10/_utils/firebase";
import { collection, doc, onSnapshot, addDoc, deleteDoc } from "firebase/firestore";


// Subscribe to the shopping list for a specific user
export const subscribeToShoppingList = (user, onUpdate) => {
  try {
    const userItemsCollection = collection(db, "users", user.uid, "items");

    return onSnapshot(userItemsCollection, (snapshot) => {
      const shoppingList = snapshot.docs.map((doc) => {
        const data = doc.data();
        const item = {
          id: doc.id,
          ...data,
          createdAt: data.createdAt.toDate(), // Convert Firestore Timestamp to JS Date
        };
        return item;
      });

      onUpdate(shoppingList);
    });
  } catch (error) {
    console.error("Error in subscribeToShoppingList:", error);
    throw error;
  }
};


// add an item to the shopping list

export const addItem = async (item, user) => {
  try {
    const { name, quantity, category } = item;

    console.log('item:', item);
    console.log('user:', user.uid);

    // Ensure the item has required fields
    if (!name || !quantity || !category) {
      throw new Error('The item object is missing required fields.');
    }

    // Construct the item object to be added to Firestore
    const newItem = {
      name,
      quantity,
      category,
      userId: user.uid, // Assigning the user ID to the item
      createdAt: new Date(),
      // Optionally, you can add other fields like createdAt, userId, etc.
    };
    console.log('newItem:', newItem);
    // Access the 'items' collection specific to the user ID
    const userItemsCollection = collection(db, 'users', user.uid, 'items');

    // Add the constructed item to the 'items' collection under the specific user
    const docRef = await addDoc(userItemsCollection, newItem);

    return docRef.id; // Return the ID of the newly added item document
  } catch (error) {
    console.error('Error in addItem:', error);
    throw error; // Rethrow the error for handling in the calling code
  }
};





// Delete an item by ID
export const deleteItem = async (itemId, userId) => {
  try {
    const itemDocRef = doc(db, "users", userId , "items", itemId);
    await deleteDoc(itemDocRef);
  } catch (error) {
    console.error("Error in deleteItem:", error);
    throw error; // Rethrow the error for handling in the calling code
  }
};
