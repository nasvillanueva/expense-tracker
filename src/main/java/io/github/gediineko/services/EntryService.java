package io.github.gediineko.services;

import io.github.gediineko.model.dto.list.EntryListDto;
import jdk.nashorn.internal.ir.EmptyNode;

import java.util.List;

/**
 * Created by ggolong on 10/7/16.
 */
public interface EntryService {

    List<EntryListDto> getAllEntry();

    List<EntryListDto> getIncomeList();

    List<EntryListDto> getSavingsList();

    List<EntryListDto> getExpenseList();

    Double getTotalIncome();

    Double getTotalSavings();

    Double getTotalExpense();

    Double getBalance();

    Boolean isNegativeBal();

}
