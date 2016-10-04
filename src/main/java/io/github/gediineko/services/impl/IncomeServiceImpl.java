package io.github.gediineko.services.impl;

import io.github.gediineko.model.dto.list.IncomeListDto;
import io.github.gediineko.repo.jpa.IncomeRepository;
import io.github.gediineko.services.IncomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by ggolong on 10/5/16.
 */
@Service
public class IncomeServiceImpl implements IncomeService {

    @Autowired
    private IncomeRepository incomeRepository;

    @Override
    public List<IncomeListDto> getAllIncome() {
        return incomeRepository.findAll()
                .stream()
                .map(IncomeListDto::new)
                .collect(Collectors.toList());
    }
}
