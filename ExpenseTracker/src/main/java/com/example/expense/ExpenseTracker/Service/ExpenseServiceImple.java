package com.example.expense.ExpenseTracker.Service;

import com.example.expense.ExpenseTracker.Entity.Expense;
import com.example.expense.ExpenseTracker.Entity.ExpenseDto;
import com.example.expense.ExpenseTracker.Entity.ExpenseResponseDto;
import com.example.expense.ExpenseTracker.Repository.ExpenseRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ExpenseServiceImple implements ExpenseService{

    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private ExpenseRepository repo;

    public ExpenseResponseDto addExpense(ExpenseDto expenseDto) {
        Expense expense = modelMapper.map(expenseDto,Expense.class);
        Expense saved = repo.save(expense);
        return modelMapper.map(saved,ExpenseResponseDto.class);
    }

    public List<ExpenseResponseDto> getAllExpenses() {
        List<Expense> expenses =  repo.findAll();
        List<ExpenseResponseDto> expenseDtos = expenses.stream()
                .map(expense -> modelMapper.map(expense,ExpenseResponseDto.class))
                .collect(Collectors.toList());
        return expenseDtos;
    }

    public void deleteExpense(Long id) {
        Expense expense  = repo.findById(id)
                .orElseThrow(()-> new RuntimeException("the given id is not exists"));
        repo.delete(expense);
    }
}
