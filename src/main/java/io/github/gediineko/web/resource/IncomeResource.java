package io.github.gediineko.web.resource;

import io.github.gediineko.model.dto.list.IncomeListDto;
import io.github.gediineko.services.IncomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by ggolong on 10/4/16.
 */
@RestController
@RequestMapping("/income")
public class IncomeResource {

    @Autowired
    private IncomeService incomeService;

    @GetMapping
    public ResponseEntity<List<IncomeListDto>> getAll(){
        return ResponseEntity.ok(incomeService.getAllIncome());
    }
}
