const add = (a, b) => a + b 
const generateGreeting = (name='Anonymous') => `Hello ${name}!`

test('should add two numbers', () => {
    const result = add(3, 4)
    expect(result).toBe(7)
})

test('should return the corect greeting message', ()=>{
    const greeting = generateGreeting('Mike')
    expect(greeting).toBe('Hello Mike!')
})

test('should return the default greeting message', ()=>{
    const greeting = generateGreeting()
    expect(greeting).toBe('Hello Anonymous!')
})