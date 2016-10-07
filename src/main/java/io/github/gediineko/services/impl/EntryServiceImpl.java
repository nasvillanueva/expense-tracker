package io.github.gediineko.services.impl;

import io.github.gediineko.model.dto.list.EntryListDto;
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
}
