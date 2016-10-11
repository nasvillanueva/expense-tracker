package io.github.gediineko.services;

import io.github.gediineko.model.dto.list.EntryListDto;

import java.util.List;

/**
 * Created by ggolong on 10/7/16.
 */
public interface EntryService {

    List<EntryListDto> getAllEntries();

    List<EntryListDto> getEntryList(String category);

    EntryListDto createEntry(EntryListDto newEntry); // EntityAlreadyExistException

    EntryListDto updateEntry(EntryListDto updatedEntry); // EntityDoesNotExistException

    EntryListDto getEntity(Long id); // EntityDoesNotExistException

    Double getTotal(String category);

    Double getBalance();

    Boolean isNegativeBal();

    void deleteEntry(Long id);
}
