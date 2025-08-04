package com.example.sathish.ngo_backend.repository;

import com.example.sathish.ngo_backend.model.Intern;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InternRepository extends JpaRepository<Intern, Long> {
    
}