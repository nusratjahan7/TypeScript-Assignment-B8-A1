# Type vs Interface in TypeScript

## Introduction 

when i learn Typescript, I meet two ways to describe the shape of data. `types` & `interface`. They look almost the same, so i often get confused. Lets understand the real differences in simple way.

## Key Differences

**1. Describing objects.** Both can describe an object.

```ts
interface User { name: string; age: number; }
type User = {name: string; age: numner; };
```


**2. Declaration merging.** Only an interface can be declared twice, and Typescript merges them automatically.

```ts
interface User { email: string; }
```


**2. Extending.** An interface uses extends. A type uses & (intersection)

```ts
interface Admin extends User { role: string; }
type AdminType = UserType & { role: string };
```

**3. Declaration merging.** Only an interface can be declared twice, and Typescript merges them automatically.

```ts
interface User { email: string; }
```

**4. Unions and primitives.** Only a type con do this.

```ts
type Id = string | number;
type Point = [number, number]; 
```

## When to Choose Which?
Use `interface` for object shapes and classes, because it is easy to extend and merge. This is very useful in libraries. Use `type` for unions, tuples, and more complex combinations of types.

## Conclusion
 
For simple objects, `type` and `interface` work almost the same. A good rule is: use `interface` for objects, use `type` for everything else, and stay consistent across project.