# Layered Architecture in NodeJS

#deep-dive

---

## Visualization

![layered-architecture-node](layered-architecture-node.webp)

## Route Layer

Defines **API endpoints** and maps them to the correct controller functions. Handles incoming HTTP requests and forwards them to the appropriate controller.

```javascript
// file: userRouter.ts

router.get('/users/:id', userController.getUserById);  
router.post('/users', userController.createUser);  
```

**Responsibilities**:

- Match HTTP requests (GET, POST, etc.) to controller functions.
- No logic here — just routing.
- Forward to controller

## Controller Layer

The controller handles the incoming request by **extracting required data, calling the service to process logic**, and then sending the appropriate response back to the client.

```javascript
// file: userController.ts

class UserController {
	getUserById = async (req, res) => {  
		try {  
			const user = await userService.getUserById(req.params.id);  
			res.status(200).json(user);  
		} catch (error) {  
			res.status(404).json({ message: error.message });  
		}  
	};
}
export const userController = new UserController();
```

**Responsibilities**:

- Get data from request (req.body, req.params)
- Call the **service** layer
- Send response (res.status().json())

## Service Layer

Contains **business logic** and coordinates multiple DAO calls if needed.

```typescript
// file: userService.ts

class UserService {
	getUserById = async (id) => {  
		const user = await userRepository.findById(id);  
		if (!user) {  
			throw new Error("User not found");  
		}  
		return user;  
	};
}
```

**Responsibilities**:

- Business rules (e.g., no duplicate emails)
- Calls DAO layer for database operations
- Reusable logic (used by multiple controllers)

## DAO Layer (Data Access Object) / Repository Layer

Interacts directly with the **database** (via Mongoose, Prisma, etc.). Abstracts database operations (CRUD).

```typescript

// file: userRepository.ts

const User = require('../models/user.model');  

class UserRepository {
	findById = (id) => User.findById(id);
	findByEmail = (email) => User.findOne({ email }); 
	create = (userData) => new User(userData).save();
}
export const userRepository = new UserRepository();
```

**Responsibilities**: 

- Raw DB operations only
- No business logic
- Easy to switch DB engine (MongoDB, MySQL, etc.)
- Communicate with the database
- Return raw data to services