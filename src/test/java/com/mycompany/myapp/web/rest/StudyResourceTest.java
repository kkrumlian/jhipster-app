package com.mycompany.myapp.web.rest;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import javax.inject.Inject;

import org.joda.time.LocalDate;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.springframework.test.context.support.DirtiesContextTestExecutionListener;
import org.springframework.test.context.transaction.TransactionalTestExecutionListener;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.mycompany.myapp.Application;
import com.mycompany.myapp.domain.Study;
import com.mycompany.myapp.repository.StudyRepository;


/**
 * Test class for the StudyResource REST controller.
 *
 * @see StudyResource
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = Application.class)
@WebAppConfiguration
@TestExecutionListeners({ DependencyInjectionTestExecutionListener.class,
    DirtiesContextTestExecutionListener.class,
    TransactionalTestExecutionListener.class })
@ActiveProfiles("dev")
public class StudyResourceTest {
  
  private static final Long DEFAULT_ID = new Long(1L);

  // private static final String DEFAULT_INSTANCE_URL = "instanceUrl";

  // private static final String UPD_INSTANCE_URL = "instanceUrlUpt";

  // private static final String DEFAULT_SAMPLE_TEXT_ATTR = "studyOid";

  // private static final String UPD_SAMPLE_TEXT_ATTR = "studyOidUpt";

  @Inject
  private StudyRepository studyRepository;

  private MockMvc restStudyMockMvc;
  
  private Study study;

  @Before
  public void setup() {
      MockitoAnnotations.initMocks(this);
      StudyResource studyResource = new StudyResource();
      ReflectionTestUtils.setField(studyResource, "studyRepository", studyRepository);

      this.restStudyMockMvc = MockMvcBuilders.standaloneSetup(studyResource).build();

      study = new Study();
      study.setId(DEFAULT_ID);
  	// study.setInstanceUrl(DEFAULT_INSTANCE_URL);
  	// study.setStudyOid(DEFAULT_SAMPLE_TEXT_ATTR);
  }

  @Test
  public void testCRUDStudy() throws Exception {

  	// // Create Study
  	// restStudyMockMvc.perform(post("/app/rest/studys")
  	// 		.contentType(TestUtil.APPLICATION_JSON_UTF8)
   //            .content(TestUtil.convertObjectToJsonBytes(study)))
   //            .andExpect(status().isOk());

  	// // Read Study
  	// restStudyMockMvc.perform(get("/app/rest/studys/{id}", DEFAULT_ID))
   //            .andExpect(status().isOk())
   //            .andExpect(content().contentType(MediaType.APPLICATION_JSON))
   //            .andExpect(jsonPath("$.id").value(DEFAULT_ID.intValue()));
  	// 		// .andExpect(jsonPath("$.instanceUrl").value(DEFAULT_INSTANCE_URL.toString()))
  	// 		// .andExpect(jsonPath("$.studyOid").value(DEFAULT_SAMPLE_TEXT_ATTR));

  	// // Update Study
  	// // study.setInstanceUrl(UPD_INSTANCE_URL);
  	// // study.setStudyOid(UPD_SAMPLE_TEXT_ATTR);

  	// restStudyMockMvc.perform(post("/app/rest/studys")
  	// 		.contentType(TestUtil.APPLICATION_JSON_UTF8)
   //            .content(TestUtil.convertObjectToJsonBytes(study)))
   //            .andExpect(status().isOk());

  	// // Read updated Study
  	// restStudyMockMvc.perform(get("/app/rest/studys/{id}", DEFAULT_ID))
   //            .andExpect(status().isOk())
   //            .andExpect(content().contentType(MediaType.APPLICATION_JSON))
   //            .andExpect(jsonPath("$.id").value(DEFAULT_ID.intValue()));
  	// 		// .andExpect(jsonPath("$.instanceUrl").value(UPD_INSTANCE_URL.toString()))
  	// 		// .andExpect(jsonPath("$.studyOid").value(UPD_SAMPLE_TEXT_ATTR));

  	// // Delete Study
  	// restStudyMockMvc.perform(delete("/app/rest/studys/{id}", DEFAULT_ID)
   //            .accept(TestUtil.APPLICATION_JSON_UTF8))
   //            .andExpect(status().isOk());

  	// // Read nonexisting Study
  	// restStudyMockMvc.perform(get("/app/rest/studys/{id}", DEFAULT_ID)
   //            .accept(TestUtil.APPLICATION_JSON_UTF8))
   //            .andExpect(status().isNotFound());

  }
}
