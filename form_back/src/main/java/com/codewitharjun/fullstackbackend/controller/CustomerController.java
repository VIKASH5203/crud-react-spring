package com.codewitharjun.fullstackbackend.controller;

import com.codewitharjun.fullstackbackend.exception.CustomerNotFoundException;
import com.codewitharjun.fullstackbackend.model.Customer;
import com.codewitharjun.fullstackbackend.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000")
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    @PostMapping("/customer")
    Customer newCustomer(@RequestBody Customer newCustomer) {
        return customerRepository.save(newCustomer);
    }

    @GetMapping("/customers")
    List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    @GetMapping("/customer/{id}")
    Customer getCustomerById(@PathVariable Long id) {
        return customerRepository.findById(id)
                .orElseThrow(() -> new CustomerNotFoundException(id));
    }

    @PutMapping("/customer/{id}")
    Customer updateCustomer(@RequestBody Customer newCustomer, @PathVariable Long id) {
        return customerRepository.findById(id)
                .map(customer -> {
                    customer.setFirstName(newCustomer.getFirstName());
                    customer.setLastName(newCustomer.getLastName());
                    customer.setDob(newCustomer.getDob());
                    customer.setIdType(newCustomer.getIdType());
                    customer.setIdNumber(newCustomer.getIdNumber());
                    customer.setGender(newCustomer.getGender());
                    return customerRepository.save(customer);
                }).orElseThrow(() -> new CustomerNotFoundException(id));
    }

    @DeleteMapping("/customer/{id}")
    String deleteCustomer(@PathVariable Long id){
        if(!customerRepository.existsById(id)){
            throw new CustomerNotFoundException(id);
        }
        customerRepository.deleteById(id);
        return  "Customer with id "+id+" has been deleted success.";
    }



}
