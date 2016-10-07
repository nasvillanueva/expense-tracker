package io.github.gediineko.services.impl;

import io.github.gediineko.model.dto.list.EntryListDto;
import io.github.gediineko.model.ref.Category;
import io.github.gediineko.repo.jpa.EntryRepository;
import io.github.gediineko.services.EntryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by ggolong on 10/7/16.
 */
@Service
public class EntryServiceImpl implements EntryService {

    @Autowired
    private EntryRepository entryRepository;

    @Override
    public List<EntryListDto> getAllEntry() {
        return entryRepository.findAll()
                .stream()
                .map(EntryListDto::new)
                .collect(Collectors.toList());
    }

    @Override
    public List<EntryListDto> getIncomeList() {
        return entryRepository.findAllByCategory(Category.INCOME)
                .stream()
                .map(EntryListDto::new)
                .collect(Collectors.toList());
    }

    @Override
    public List<EntryListDto> getSavingsList() {
        return entryRepository.findAllByCategory(Category.SAVINGS)
                .stream()
                .map(EntryListDto::new)
                .collect(Collectors.toList());
    }

    @Override
    public List<EntryListDto> getExpenseList() {
        return entryRepository.findAll()
                .stream()
                .filter(e -> (e.getCategory() != Category.INCOME
                        && e.getCategory() != Category.SAVINGS))
                .map(EntryListDto::new)
                .collect(Collectors.toList());
    }

    @Override
    public Double getTotalIncome() {
        return entryRepository.getTotalOfCategory(getIncomeList());
    }

    @Override
    public Double getTotalSavings() {
        return entryRepository.getTotalOfCategory(getSavingsList());
    }

    @Override
    public Double getTotalExpense() {
        return entryRepository.getTotalOfCategory(getExpenseList());
    }

    @Override
    public Double getBalance() {
        return getTotalIncome() - (getTotalSavings() + getTotalExpense());
    }

    @Override
    public Boolean isNegativeBal() {
        return getBalance() <= 0 ;
    }
}
