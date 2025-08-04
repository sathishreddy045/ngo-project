package com.example.sathish.ngo_backend.service;

import com.example.sathish.ngo_backend.dto.InternDto;
import com.example.sathish.ngo_backend.model.Intern;
import com.example.sathish.ngo_backend.repository.InternRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class InternService {

    @Autowired
    private InternRepository internRepository;

    public InternDto registerIntern(InternDto internDto) {
        Intern intern = convertToEntity(internDto);
        intern.setRegistrationDate(LocalDateTime.now());
        Intern savedIntern = internRepository.save(intern);
        return convertToDto(savedIntern);
    }

    public List<InternDto> getAllInterns() {
        return internRepository.findAll()
                .stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    

    private InternDto convertToDto(Intern intern) {
        InternDto dto = new InternDto();
        dto.setId(intern.getId());
        dto.setEmail(intern.getEmail());
        dto.setFullName(intern.getFullName());
        dto.setGender(intern.getGender());
        dto.setHighestQualification(intern.getHighestQualification());
        dto.setCollege(intern.getCollege());
        dto.setCountry(intern.getCountry());
        dto.setContactNumber(intern.getContactNumber());
        dto.setInternshipProgram(intern.getInternshipProgram());
        dto.setSkillLevel(intern.getSkillLevel());
        dto.setDuration(intern.getDuration());
        dto.setInterestedInJob(intern.isInterestedInJob());
        dto.setLinks(intern.getLinks());
        dto.setRegistrationDate(intern.getRegistrationDate());
        return dto;
    }

    private Intern convertToEntity(InternDto dto) {
        Intern intern = new Intern();
        intern.setEmail(dto.getEmail());
        intern.setFullName(dto.getFullName());
        intern.setGender(dto.getGender());
        intern.setHighestQualification(dto.getHighestQualification());
        intern.setCollege(dto.getCollege());
        intern.setCountry(dto.getCountry());
        intern.setContactNumber(dto.getContactNumber());
        intern.setInternshipProgram(dto.getInternshipProgram());
        intern.setSkillLevel(dto.getSkillLevel());
        intern.setDuration(dto.getDuration());
        intern.setInterestedInJob(dto.isInterestedInJob());
        intern.setLinks(dto.getLinks());
        return intern;
    }
}
