import express from "express";
const app = express();


const customers = [
      { id: 1, name: 'Marcos Vinicius' },
      { id: 2, name: 'Maria Eduarda' },
      { id: 3, name: 'José Francisco' }
];

app.use(express.json());

app.get('/api/ping', (request, response) => {
      response.send({
            message: "dale"
      })
});

app.get('/api/customers', (request, response) => {
      response.send(customers);
});

app.post('/api/customers', (request, response) => {
      const { body } = request;
      customers.push(body);
      response.send(customers);
});

app.put('/api/customers/:id', (request, response) => {
      const { id } = request.params;
      const { body } = request;

      const index = customers.findIndex(customers => customers.id == id);
      customers[index] = body;

      response.send(customers);
});

app.delete('/api/customers/:id', (request, response) => {
      const { id } = request.params;
      const newArray = customers.filter(customers => customers.id != id);
      response.send(newArray);
      

});

app.listen(8000, () => {
      console.log("DALE DALE DALE")
});
