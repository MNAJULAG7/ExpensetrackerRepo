package com.example.expense.ExpenseTracker.Service;

import com.example.expense.ExpenseTracker.Entity.Expense;
import com.example.expense.ExpenseTracker.Entity.ExpenseDto;

import com.example.expense.ExpenseTracker.Entity.ExpenseResponseDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ExpenseService {
    ExpenseResponseDto addExpense(ExpenseDto expense);

    List<ExpenseResponseDto> getAllExpenses();

    void deleteExpense(Long id);

}
