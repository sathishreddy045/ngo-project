package com.example.sathish.ngo_backend.controller;

import com.example.sathish.ngo_backend.dto.InternDto;
import com.example.sathish.ngo_backend.service.InternService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/interns")
@CrossOrigin(origins = "http://localhost:3000")
public class InternController {

    @Autowired
    private InternService internService;

    @PostMapping
    public ResponseEntity<InternDto> registerIntern(@RequestBody InternDto internDto) {
        try {
            InternDto newIntern = internService.registerIntern(internDto);
            return new ResponseEntity<>(newIntern, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping
    public ResponseEntity<List<InternDto>> getAllInterns() {
        List<InternDto> interns = internService.getAllInterns();
        return new ResponseEntity<>(interns, HttpStatus.OK);
    }
}
