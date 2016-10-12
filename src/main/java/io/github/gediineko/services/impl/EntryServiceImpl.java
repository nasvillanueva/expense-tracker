package io.github.gediineko.services.impl;

import com.google.common.collect.Lists;
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
    public List<EntryListDto> getAllEntries() {
        return entryRepository.findAll()
                .stream()
                .map(EntryListDto::new)
                .collect(Collectors.toList());
    }

    @Override
    public List<EntryListDto> getEntryList(String category) {
        List<Category> categories = resolveStrCategory(category.toUpperCase());
        return entryRepository.findAllByCategoryIn(categories)
                .stream()
                .map(EntryListDto::new)
                .collect(Collectors.toList());
    }

    @Override
    public EntryListDto createEntry(EntryListDto newEntry) {
        return null;
    }

    @Override
    public EntryListDto updateEntry(EntryListDto updatedEntry) {
        return null;
    }

    @Override
    public EntryListDto getEntity(Long id) {
        return null;
    }

    @Override
    public Double getTotal(String category) {
        List<Category> categories = resolveStrCategory(category);

        return entryRepository.getTotalOfCategory(categories);
    }

    @Override
    public Double getBalance() {
        return getTotal(Category.INCOME_STR) - (getTotal(Category.EXPENSE) + getTotal(Category.SAVINGS_STR));
    }

    @Override
    public Boolean isNegativeBal() {
        return getBalance() <= 0;
    }

    @Override
    public void deleteEntry(Long id) {
        entryRepository.delete(id);
    }

    private List<Category> resolveStrCategory(String category) {
        List<Category> categories;
        switch (category) {
            case Category.EXPENSE:
                categories = Category.expenseList();
                break;
            case Category.INCOME_STR:
                categories = Category.incomeList();
                break;
            case Category.SAVINGS_STR:
                categories = Category.savingsList();
                break;
            default:
                categories = Lists.newArrayList(Category.valueOf(category));
                break;
        }
        return categories;
    }
}
