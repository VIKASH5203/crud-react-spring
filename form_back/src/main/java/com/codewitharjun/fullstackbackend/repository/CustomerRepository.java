package com.codewitharjun.fullstackbackend.repository;

import com.codewitharjun.fullstackbackend.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer,Long> {
}
