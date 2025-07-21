package com.example.demo;

import com.example.demo.model.Account;
import com.example.demo.repository.AccountRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/accounts")
public class AccountController {

    private final AccountRepository repository;

    public AccountController(AccountRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Account> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public Account create(@RequestBody Account account) {
        return repository.save(account);
    }
}
