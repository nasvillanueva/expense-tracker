package io.github.gediineko.services;

import io.github.gediineko.model.dto.list.IncomeListDto;

import java.util.List;

/**
 * Created by ggolong on 10/5/16.
 */
public interface IncomeService {

    List<IncomeListDto> getAllIncome();
}
