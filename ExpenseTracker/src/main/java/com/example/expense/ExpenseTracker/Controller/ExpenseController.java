package com.example.expense.ExpenseTracker.Controller;



import com.example.expense.ExpenseTracker.Entity.ExpenseDto;
import com.example.expense.ExpenseTracker.Entity.ExpenseResponseDto;
import com.example.expense.ExpenseTracker.Service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/expenses")
@CrossOrigin("*")
public class ExpenseController {

    @Autowired
    private ExpenseService service;


    @PostMapping("/add")
    public ResponseEntity<ExpenseResponseDto> addExpense(@RequestBody ExpenseDto expense) {
        ExpenseResponseDto expenseResponseDto = service.addExpense(expense);
        return ResponseEntity.ok().body(expenseResponseDto);
    }

    @GetMapping("/get")
    public ResponseEntity<List<ExpenseResponseDto>> getAllExpenses() {
        List<ExpenseResponseDto> expenseResponseDtos = service.getAllExpenses();
        return ResponseEntity.ok().body(expenseResponseDtos);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteExpense(@PathVariable Long id) {
        service.deleteExpense(id);
        return ResponseEntity.ok().body("deleted Successfully");
    }
}